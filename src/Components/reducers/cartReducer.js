

const SET_CART = "SET_CART"

const SET_INCART = "SET_INCART"

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