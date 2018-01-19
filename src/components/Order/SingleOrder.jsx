import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editOrder } from '../../actions/orderActions';

class SingleOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }

        this.submitForm = this.submitForm.bind(this);
        this.checkInventory = this.checkInventory.bind(this);
    }

    submitForm(event) {
        event.preventDefault()
        const { order, editOrder } = this.props
        const data = {
            item: this.refs.item.value,
            amount: this.refs.amount.value,
            workStatus: this.refs.workStatus.value,
            key: order.key
        }
        const checkInventory = this.checkInventory(parseInt(data.amount, 10), data.item);
        const open = data.workStatus === 'open';
        data.checkInventory = checkInventory;
        data.open = open;
        editOrder(order.key, data);
        this.setState({ isEditing: false })
    }

    checkInventory(orderAmount, orderItemName) {
        const { items } = this.props;
        const item = items.find((item) => {
            return item.name === orderItemName;    
        });
        return orderAmount <= item.inventory;
    }

    render () {
        const { order } = this.props
        return this.state.isEditing ?
            <form onSubmit={this.submitForm} ref="orderForm">
                <input type="text" ref="item" defaultValue={order.item} />
                <input type="text" ref="amount" defaultValue={order.amount} />
                <input type="text" ref="workStatus" defaultValue={order.workStatus} />
                <input type="submit" />
            </form> :
            <div className="list-order" onClick={() => { this.setState({ isEditing: true })}}>
                <div>{order.item}</div>
                <div>{order.amount}</div>
                <div>{order.workStatus}</div>
            </div>
    }
}

function mapStateToProps (state) {
    return {
        orders: state.order,
        items: state.item
    }
}

export default connect(mapStateToProps, { editOrder })(SingleOrder);
