import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../../actions/itemActions';

class SingleItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault()
        const { item, editItem } = this.props
        const data = {
            name: this.refs.name.value,
            inventory: this.refs.inventory.value,
            key: item.key
        }
        
        editItem(item.key, data)
        this.setState({ isEditing: false })
    }

    render () {
        const { item } = this.props
        return this.state.isEditing ?
            <form onSubmit={this.submitForm} ref="orderForm">
                <input type="text" ref="name" defaultValue={item.name} />
                <input type="text" ref="inventory" defaultValue={item.inventory} />
                <input type="submit" />
            </form> :
            <div className="list-order" onClick={() => { this.setState({ isEditing: true })}}>
                <div>{item.name}</div>
                <div>{item.inventory}</div>
            </div>
    }
}

function mapStateToProps (state) {
    return {
        items: state.item
    }
}

export default connect(mapStateToProps, { editItem })(SingleItem);
