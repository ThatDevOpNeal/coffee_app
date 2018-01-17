import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOrder } from '../../actions/orderActions';

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
}

function mapStateToProps (state) {
    return {
        orders: state.order
    }
}
export default connect(mapStateToProps, { deleteOrder })(orderDisplay);