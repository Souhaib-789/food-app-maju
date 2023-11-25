import { CartActionTypes } from "../ActionTypes/CartActionTypes";


class CartActions {

    static AddtoCart = data => {
        return {
            type: CartActionTypes.ADD_ITEM,
            payload: data
        };
    };

    static removeFromCart = (id) => {
        return {
            type: CartActionTypes.REMOVE_ITEM,
            payload: id
        };
    };


    static decrementQuantity = (data) => {
        return {
            type: CartActionTypes.DECREMENT_QUANTITY,
            payload: data
        };
    };

    static clearCart = () => {
        return {
            type: CartActionTypes.CLEAR_ADD_ITEMS,
        };
    };

}

export default CartActions;