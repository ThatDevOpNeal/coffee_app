import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder, deleteOrder } from '../actions/orderActions'

class orderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            workStatus: 'Open'
        }
    }

    addOrder() {
        console.log('this.state.item: ', this.state.item);
        console.log('this.state.workStatus: ', this.state.workStatus);
        this.props.addOrder(this.state.item, this.state.workStatus);
    }

    deleteOrder(key) {
        this.props.deleteOrder(key);
    }

    renderOrders() {
        let { orders } = this.props;
        return (
            orders.map(order => {
                return (
                   <li key={order.key} className="list-orders">
                        <div className="list-order">
                            <div>{order.item}</div>
                            <div>{order.workStatus}</div>
                        </div>
                        <div
                            className="list-order delete-button"
                            onClick={() => this.deleteOrder(order.key)}
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
            <div className="orderComponent">
                <div className="title">>
                    Place an order:
                </div>
                <div className="form">
                    <div className="form-group">
                        <input 
                            className="form-group item"
                            placeholder="what would you like?"
                            onChange={event => this.setState({item: event.target.value})}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addOrder()}
                    >
                        Add Order!
                    </button>
                </div>
                { this.renderOrders() }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        orders: state.order
    }
}
export default connect(mapStateToProps, { addOrder, deleteOrder })(orderComponent);
