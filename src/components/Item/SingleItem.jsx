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
            name: String(this.refs.name.value).toLowerCase(),
            inventory: this.refs.inventory.value,
            max: item.max,
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
                <div>Name: {item.name}</div>
                <div>Inventory {item.inventory}</div>
                <div>Max {item.max}</div>
                <div
                    className="list-item delete-button"
                    onClick={() => this.props.deleteItem(item.key, item.name)}
                >
                    x
                </div>
            </div>
    }
}

function mapStateToProps (state) {
    return {
        items: state.item
    }
}

export default connect(mapStateToProps, { editItem })(SingleItem);
