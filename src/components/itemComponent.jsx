import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../actions/itemActions'

class itemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            inventory: 0
        }
    }

    addItem() {
        this.props.addItem(this.state.name, this.state.inventory);
    }

    deleteItem(key) {
        this.props.deleteItem(key);
    }

    renderItems() {
        let { items } = this.props;
        return (
            items.map(item => {
                return (
                   <li key={item.key} className="list-items">
                        <div className="list-item">
                            <div>{item.name}</div>
                            <div>{item.inventory}</div>
                        </div>
                        <div
                            className="list-item delete-button"
                            onClick={() => this.deleteItem(item.key)}
                        >
                            x
                        </div>
                   </li> 
                )
            })
        )
    }
    render() {
        return (
            <div className="itemComponent">
                <div className="title">>
                    Item Menu:
                </div>
                <div className="form">
                    <div className="form-item">
                        <input 
                            className="form-item item"
                            placeholder="Add an item to the menu.."
                            onChange={event => this.setState({name: event.target.value})}
                        />
                        <input
                            className="form-item item"
                            placeholder='input an integer..'
                            onChange={event => this.setState({inventory: parseInt(event.target.value)})}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addItem()}
                    >
                        Add Item!
                    </button>
                </div>
                { this.renderItems() }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        items: state.item
    }
}

export default connect(mapStateToProps, { addItem, deleteItem })(itemComponent);