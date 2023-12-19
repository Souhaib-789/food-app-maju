import { combineReducers, createStore } from "redux";
import { CartReducer } from "../Reducers/CartReducer";
import { UserReducer } from "../Reducers/UserReducer";
import { SelectCityReducer } from "../Reducers/SelectCityReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const AllReducers = combineReducers({
  CartReducer,
  UserReducer,
  SelectCityReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: "SelectCityReducer",
};
const persistedReducer = persistReducer(persistConfig, AllReducers);
const myStore = createStore(persistedReducer);
const persistor = persistStore(myStore);
export { myStore, persistor };
