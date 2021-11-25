// 하위 리듀서를 취합하는 root reducer이다.

import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import {History} from 'history';

const reducer = (history: History<unknown>) => 
    combineReducers({ 
        auth,
        router: connectRouter(history),
})

export default reducer;