import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../actions/orderActions';

class orderAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            amount: 0,
            workStatus: 'open'
        }
    }

    addOrder() {
        this.props.addOrder(this.state.item, this.state.amount, this.state.workStatus);
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
                        <input placeholder="amount" onChange={(evt) => {this.setState({amount: evt.target.value})}} />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addOrder()}
                    >
                        Add Order!
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        orders: state.order
    }
}
export default connect(mapStateToProps, { addOrder })(orderAdd);