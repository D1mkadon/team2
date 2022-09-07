const SET_PRODUCTS = "SET_PRODUCTS"
const SET_IS_FETCH = "SET_IS_FETCH"

const defaulStore = {
    item: [],
    isFetching: true,
}

export default function productsReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                item: action.payload,
                isFetching: false
            }
        case SET_IS_FETCH:
            return {
                ...state,
                isFetching: action.payload
            }

        default:
            return state
    }

}

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products

})
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCH,
    payload: bool

})

