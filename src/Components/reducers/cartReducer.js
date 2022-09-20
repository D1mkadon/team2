

const SET_CART = "SET_CART"

const SET_INCART = "SET_INCART"


const REMOVE_ITEM = "REMOVE_ITEM"

const ADD_TOTAL_PRICE = "ADD_TOTAL_PRICE"

const ADD_MORE_PRODUCT = "ADD_MORE_PRODUCT"



const defaulStore = {
    arrOfId: [],
    inCart:" Add cart",
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
        
        case SET_INCART:
            return {
                ...state,
                inCart: action.payload
        }
        case ADD_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice += action.payload
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

export const setInCart = (inCart) => ({
    type: SET_INCART,
    payload: inCart

})
export const setAddTotalPrice = (price) => ({
    type: ADD_TOTAL_PRICE,
    payload: price

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