import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOrder, editOrder } from '../../actions/orderActions';

class SingleOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault()
        const { order, editOrder } = this.props
        const data = {
            item: this.refs.item.value,
            workStatus: this.refs.workStatus.value,
            key: order.key
        }
        
        editOrder(order.key, data)
        this.setState({ isEditing: false })
    }

    render () {
        const { order } = this.props
        return this.state.isEditing ?
            <form onSubmit={this.submitForm} ref="orderForm">
                <input type="text" ref="item" defaultValue={order.item} />
                <input type="text" ref="workStatus" defaultValue={order.workStatus} />
                <input type="submit" />
            </form> :
            <div className="list-order" onClick={() => { this.setState({ isEditing: true })}}>
                <div>{order.item}</div>
                <div>{order.workStatus}</div>
            </div>
    }
}

class orderDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            workStatus: 'Open'
        }
    }

    deleteOrder(key) {
        this.props.deleteOrder(key);
    }

    render() {
        let { orders } = this.props;
        return (
            orders.map(order => {
                return (
                   <li key={order.key} className="list-orders">
                        <SingleOrder order={order} editOrder={this.props.editOrder} />
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
}

function mapStateToProps (state) {
    return {
        orders: state.order
    }
}
export default connect(mapStateToProps, { deleteOrder, editOrder })(orderDisplay);