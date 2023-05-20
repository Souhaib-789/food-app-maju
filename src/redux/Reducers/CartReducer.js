import { CartActionTypes } from "../ActionTypes/CartActionTypes";


const initialState = [];

export const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case CartActionTypes.ADD_ITEM:
            console.log('-------- Cart array -------------', action.payload);
            return [...state, action.payload]


        case CartActionTypes.CLEAR_ADD_ITEMS:
            return []


        case CartActionTypes.REMOVE_ITEM:
            const delArray = state.filter((item, index) => {
                return (index !== action.payload);
            })
            return delArray;

      


        default:
            break;
    }
    return state;

}