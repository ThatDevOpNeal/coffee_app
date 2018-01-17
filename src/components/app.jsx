import React, { Component } from 'react';
import Order from './orderComponent.jsx';
import ItemAdd from './Item/ItemAdd';
import ItemDisplay from './Item/ItemDisplay';

export default class App extends Component {
    render () {
        return (
            <div>
                <title>Order App</title>
                <Order/>
                <ItemAdd/>
                <ItemDisplay/>
            </div>
        );
    }
}