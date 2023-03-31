import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as Electricpro } from "./ElectronicsProduct/reducer";
import {reducer as HwReducer} from './HwProducts/reducer'

const rootReducer = combineReducers({HwReducer,Electricpro });

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));