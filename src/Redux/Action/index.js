import * as types from '../Constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}