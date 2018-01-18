import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from '../constants';

let itemCounter = 0;

const item = (action) => {
    let { name, inventory } = action; //es6 variable deconstruction
    return {
        name,
        inventory,
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
            items = [...state, item(action)];
            return items;
        case EDIT_ITEM:
            items = [...state]
            items[action.key] = action.order
            return items;
        case DELETE_ITEM:
            items = deleteByKey(state, action.key);
            return items;
        default:
            return state;
    }
}