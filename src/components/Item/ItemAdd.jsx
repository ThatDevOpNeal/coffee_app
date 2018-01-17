import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';

class itemAdd extends Component {
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.item
    }
}

export default connect(mapStateToProps, { addItem })(itemAdd);