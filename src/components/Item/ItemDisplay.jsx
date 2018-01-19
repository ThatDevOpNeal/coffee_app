import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, editItem } from '../../actions/itemActions';
import SingleItem from './SingleItem';

class itemDisplay extends Component {
    constructor(props) {
        super(props);
    }

    deleteItem(key, name) {
        this.props.deleteItem(key, name);
    }

    render() {
        let { items } = this.props;
        return (
            items.map(item => {
                return (
                   <li key={item.key} className="list-items">
                   <SingleItem item={item} editItem={this.props.editItem} />
                        <div
                            className="list-item delete-button"
                            onClick={() => this.deleteItem(item.key, item.name)}
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

export default connect(mapStateToProps, { deleteItem, editItem })(itemDisplay);