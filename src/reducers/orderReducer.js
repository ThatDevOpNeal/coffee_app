import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER, DELETE_ALL_ORDERS } from '../constants'

let keyCounter = 0;

// whatever is being passed in through param has 'item' and 'workStatus'
const order = (action) => {
    let { item, amount, workStatus} = action; //es6 variable deconstruction
    return {
        item,
        amount,
        workStatus,
        key: keyCounter++ // it's okay if this counter increments actually cause we want it to.
    }
}

const deleteByKey = (state = [], key) => {
    const orders = state.filter(order => order.key !== key);
    return orders; //new array with that specific key filtered out.
}

export const orderReducer = (state = [], action) => {
    let orders = null;
    switch (action.type) {
        case ADD_ORDER:
            orders = [...state, order(action)];
            return orders;
        case EDIT_ORDER:
            orders = [...state]
            if(checkInventory && statusChange) {
                changeOrderAmount
            } 
            changeotherfields()
            orders[action.key] = action.order
            return orders;
        case DELETE_ORDER:
            orders = deleteByKey(state, action.key);
            return orders;
        case DELETE_ALL_ORDERS:
            return [];
        default:
            return state
    }
}