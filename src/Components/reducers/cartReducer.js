

const SET_CART = "SET_CART"

const SET_INCART = "SET_INCART"

const REMOVE_ITEM = "REMOVE_ITEM"


const defaulStore = {
    id: [],
    inCart:[]
}

export default function cartReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                
                id: [...state.id, action.payload]
            }
        
        case SET_INCART:
            return {
                ...state,
                inCart: action.payload
        }
        case REMOVE_ITEM:
            return {
                ...state,
                //  id: state.id.filter(el => el.id !== action.payload)    

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
export const setRemoveItem = (index) => ({
    type: REMOVE_ITEM,
    payload: index

})
