import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as HwReducer } from './HwProducts/reducer';
import { reducer as AuthReducer } from "./AuthReducer/reducer"

const rootReducer = combineReducers({ HwReducer, AuthReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));