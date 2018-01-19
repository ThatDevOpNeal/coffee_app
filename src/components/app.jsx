import React, { Component } from 'react';
import OrderAdd from './Order/OrderAdd';
import OrderDisplay from './Order/OrderDisplay';
import ItemAdd from './Item/ItemAdd';
import ItemDisplay from './Item/ItemDisplay';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOrderView: false
        }
        this.modifyView = this.modifyView.bind(this);
    }

    modifyView () {
        this.setState({
            isOrderView: this.state.isOrderView ? false : true
        })
    }

    render () {
        return (
            <div>
                <title>Order App</title>
                <button onClick={() => this.modifyView()}>Toggle View</button>
                {this.state.isOrderView ? (
                    <div>
                        <OrderAdd/>
                        <OrderDisplay/> 
                    </div>
                ) : (
                    <div>
                        <ItemAdd/>
                        <ItemDisplay/>
                    </div>
                )}
            </div>
        );
    }
}