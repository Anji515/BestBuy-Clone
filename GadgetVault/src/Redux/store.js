import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as HwReducer } from './HwProducts/reducer';
import { reducer as AuthReducer } from "./AuthReducer/reducer"
import { reducer as addProductReducer } from "./AdminADDProduct/reducer";

const rootReducer = combineReducers({ HwReducer, AuthReducer, addProductReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));