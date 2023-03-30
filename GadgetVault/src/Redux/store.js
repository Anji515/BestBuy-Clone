import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import {reducer as HwReducer} from './HwProducts/reducer';

const rootReducer = combineReducers({HwReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));