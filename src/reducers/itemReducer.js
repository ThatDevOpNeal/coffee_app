import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, EDIT_ORDER } from '../constants';

let itemCounter = 0;

function createItem(action)  {
    let { name, inventory, max } = action; //es6 variable deconstruction
    return {
        name,
        inventory,
        max,
        key: itemCounter++ // it's okay if this counter increments actually cause we want it to.
    }
}

// Think about how the key relates to the position of the array.
// delete at index-->key
const deleteByKey = (state = [], key) => {
    return state.filter(item => item.key !== key);
}

export const itemReducer = (state = [], action) => {
    let items = null;
    switch (action.type) {
        case ADD_ITEM:
            items = [...state, createItem(action)];
            return items;
        case EDIT_ITEM:
            items = [...state]
            items[action.key] = action.order
            return items;
        case DELETE_ITEM:
            items = deleteByKey(state, action.key);
            return items;
        case EDIT_ORDER:
            const { order, key } = action;
            const { checkInventory, reduceInventoryBool } = order;
            let item;
            items = [...state];
            if (checkInventory && reduceInventoryBool) {
                item = items.find((item) => { return item.name = order.item});
                item.inventory = item.inventory - order.amount;
                items[item.key] = item;
            }   
            return items;
        default:
            return state;
    }
}

