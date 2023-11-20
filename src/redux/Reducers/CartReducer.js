import { CartActionTypes } from "../ActionTypes/CartActionTypes";


const initialState = {
    cartItems: []
}
export const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }


        case CartActionTypes.CLEAR_ADD_ITEMS:
            return []

        case CartActionTypes.REMOVE_ITEM:
            const updatedArray = state?.cartItems?.filter((item) => {
                return (item._id !== action.payload);
            })
            return {
                ...state,
                cartItems: [...updatedArray],
            }

        case CartActionTypes.INCREMENT:
            const addProductQuantity = state?.cartItems?.findIndex(item => {
                return item._id == action.payload
            })
            console.log('addProductQuantity', addProductQuantity);

            state.cartItems[addProductQuantity].quantity += 1
            console.log('state', state);
        // return [...state,]

        default:
            return state;
    }

}
