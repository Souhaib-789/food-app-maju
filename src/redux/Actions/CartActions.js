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

    static increment = (id) => {
        return {
            type: CartActionTypes.INCREMENT,
            payload: id
        };
    };

    static decrement = (id) => {
        return {
            type: CartActionTypes.DECREMENT,
            payload: id
        };
    };

    static clearCart = () => {
        return {
            type: CartActionTypes.CLEAR_ADD_ITEMS,
        };
    };

}

export default CartActions;