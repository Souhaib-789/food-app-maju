import { CartActionTypes } from "../ActionTypes/CartActionTypes";


const initialState = {
    cartItems: [],
}

export const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case CartActionTypes.ADD_ITEM:
            const itemIndex = state.cartItems.findIndex(item => {
                return item._id == action.payload._id
            })
            if (itemIndex >= 0) {
                const updatedCartItems = state?.cartItems?.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                }
            }

        case CartActionTypes.CLEAR_ADD_ITEMS:
            return {
                cartItems: []
            }

        case CartActionTypes.REMOVE_ITEM:
            const updatedArray = state?.cartItems?.filter((item) => {
                return (item._id !== action.payload);
            })
            return {
                ...state,
                cartItems: [...updatedArray],
            }

        case CartActionTypes.DECREMENT_QUANTITY:
            const decrementItemIndex = state.cartItems.findIndex(item => {
                return item._id === action.payload._id
            })

            if (state.cartItems[decrementItemIndex].quantity > 1) {
                const updatedCartItems = state?.cartItems?.map((item, index) => {
                    if (index === decrementItemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }

            else {
                const updatedArray = state?.cartItems?.filter((item) => {
                    return (item._id !== action.payload._id);
                })
                return {
                    ...state,
                    cartItems: [...updatedArray],
                }
            }

        default:
            return state;
    }

}
