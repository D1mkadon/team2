const SET_PRODUCTS = "SET_PRODUCTS"
const SET_IS_FETCH = "SET_IS_FETCH"
const SET_SEARCHVALUE = "SET_SEARCHVALUE"
const SET_PRODUCT_CURRENT = "SET_PRODUCT_CURRENT"

const defaulStore = {
    item: [],
    searchValue: [],
    isFetching: true,
    currentProduct: []
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
        case SET_SEARCHVALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        case SET_PRODUCT_CURRENT:
            return {
                ...state,
                currentProduct: action.payload

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
export const setSearchValue = (text) => ({
    type: SET_SEARCHVALUE,
    payload: text

})
export const setCurrentProduct = (prod) => ({
    type: SET_PRODUCT_CURRENT,
    payload: prod

})

