import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOrder, editOrder } from '../../actions/orderActions';
import SingleOrder from './SingleOrder';

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