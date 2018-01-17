import React, { Component } from 'react';
import Item from './itemComponent.jsx';
import Order from './orderComponent.jsx';

export default class App extends Component {
    render () {
        return (
            <div>
                <title>Order App</title>
                <Order/>
                <Item/>
            </div>
        );
    }
}