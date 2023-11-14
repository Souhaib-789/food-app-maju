import { CartActionTypes } from "../ActionTypes/CartActionTypes";


const initialState = [];

export const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case CartActionTypes.ADD_ITEM:
            return [...state, action.payload]

        case CartActionTypes.CLEAR_ADD_ITEMS:
            return []

        case CartActionTypes.REMOVE_ITEM:
            const delArray = state.filter((item, index) => {
                return (item._id !== action.payload);
            })
            return delArray;


        default:
            return state;
    }
    return state;

}