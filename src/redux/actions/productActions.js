import { ActionTypes } from "../constants/action-types";

export const setProduct = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (products) =>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products
    }
}