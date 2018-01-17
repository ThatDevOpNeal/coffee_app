import React, { Component } from 'react';
import OrderAdd from './Order/OrderAdd';
import OrderDisplay from './Order/OrderDisplay';
import ItemAdd from './Item/ItemAdd';
import ItemDisplay from './Item/ItemDisplay';

export default class App extends Component {
    render () {
        return (
            <div>
                <title>Order App</title>
                <OrderAdd/>
                <OrderDisplay/>
                <ItemAdd/>
                <ItemDisplay/>
            </div>
        );
    }
}