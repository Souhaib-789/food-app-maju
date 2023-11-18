import { combineReducers, createStore } from "redux";
import { CartReducer } from "../Reducers/CartReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const AllReducers = combineReducers({
    CartReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
};
const persistedReducer = persistReducer(persistConfig, AllReducers);
const myStore = createStore(persistedReducer)
const persistor = persistStore(myStore);
export { myStore, persistor }


