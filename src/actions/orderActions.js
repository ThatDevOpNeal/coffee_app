import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER, DELETE_ALL_ORDERS } from '../constants'

export const addOrder = (item, workStatus) => {
    const action = {
        type: ADD_ORDER,
        item,
        workStatus
    }
    console.log('action in addOrder: ', action);
    return action;
}

export const deleteOrder = (key) => {
    const action = {
        type: DELETE_ORDER,
        key
    }
    console.log('action in deleteOrder: ', action);
    return action;
}

export const deleteAllOrders = () => {
    const action = {
        type: DELETE_ALL_ORDERS
    }
    console.log('action in deleteAllOrders: ', action);
    return action;
}