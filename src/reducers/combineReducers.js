import { combineReducers } from 'redux';
import { itemReducer } from './itemReducer';
import { orderReducer } from './orderReducer';

export default combineReducers({
    order: orderReducer,
    item: itemReducer
})

