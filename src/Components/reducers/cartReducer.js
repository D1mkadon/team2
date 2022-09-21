

const SET_CART = "SET_CART"



const REMOVE_ITEM = "REMOVE_ITEM"

const ADD_MORE_PRODUCT = "ADD_MORE_PRODUCT"



const defaulStore = {
    arrOfId: [],
    totalPrice:0,
    bin:[]
}

export default function cartReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                arrOfId: [...state.arrOfId, action.payload]
            }
        
  
      
        case ADD_MORE_PRODUCT:
            return {
                ...state,
                arrOfId: [...state.arrOfId, action.payload],
                totalPrice: state.totalPrice += action.total
        }   
        case REMOVE_ITEM:
            return {
                ...state,
                bin: state.arrOfId.splice((state.arrOfId.indexOf(action.payload)),1),
                totalPrice: state.totalPrice - action.total
        }

        default:
            return state
    }
}
export const setCartPrice = (id) => ({
    type: SET_CART,
    payload: id

})


export const setAddMoreProducts = (idProducta , price) => ({
    type: ADD_MORE_PRODUCT,
    payload: idProducta,
    total: price

})
export const setRemoveItem = (index , price) => ({
    type: REMOVE_ITEM,
    payload: index,
    total: price,

})