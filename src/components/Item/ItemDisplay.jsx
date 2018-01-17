import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/itemActions';

class itemDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            inventory: 0
        }
    }

    deleteItem(key) {
        this.props.deleteItem(key);
    }

    render() {
        let { items } = this.props;
        return (
            items.map(item => {
                return (
                   <li key={item.key} className="list-items">
                        <div className="list-item">
                            <div>{item.name}</div>
                            <div>{item.inventory}</div>
                        </div>
                        <div
                            className="list-item delete-button"
                            onClick={() => this.deleteItem(item.key)}
                        >
                            x
                        </div>
                   </li> 
                )
            })
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.item
    }
}

export default connect(mapStateToProps, { deleteItem })(itemDisplay);