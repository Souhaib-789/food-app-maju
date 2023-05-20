import { combineReducers, createStore } from "redux";
import { CartReducer } from "../Reducers/CartReducer";



const AllReducers = combineReducers({
    CartReducer,
});

export const myStore = createStore(AllReducers)