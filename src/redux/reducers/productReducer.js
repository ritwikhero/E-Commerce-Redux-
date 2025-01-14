import { ActionTypes } from "../constants/action-types"

const initialState = {
    products : [{
      id : 1,
      category : "Electronics",
      title : "Macbook",  
    }],
}
export const productReducer = (state = initialState, {type , payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload}
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, product : payload}
        // case ActionTypes.REMOVE_SELECTED_PRODUCT:
        //     return {...state, product : {}}
        default:
            return state
    }
} 

