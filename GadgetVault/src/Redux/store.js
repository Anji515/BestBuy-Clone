import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as Electricpro } from "./ElectronicsProduct/reducer";
const rootReducer = combineReducers({
    Electricpro 
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));