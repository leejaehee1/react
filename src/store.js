import {createStore} from "redux";


const ADD = "ADD";
const DELETE = "DELETE";
const RESET = "RESET";
const CURRENT = "CURRENT";


const reducer = (state='abc', action) => {
    switch (action.type) {
        case ADD:
            return "ADD print";
        case DELETE:
            return "DELETE print";
        case RESET:
            return "RESET print";
        case CURRENT:
            return state;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;