const SET_PRODUCTS = "SET_PRODUCTS"
const SET_IS_FETCH = "SET_IS_FETCH"
const SET_IS_ACTIVE = "SET_IS_ACTIVE"
const SET_SEARCHVALUE = "SET_SEARCHVALUE"
const SET_PRODUCT_CURRENT = "SET_PRODUCT_CURRENT"
const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY"

const defaulStore = {
    item: [],
    searchValue: [],
    isFetching: true,
    currentProduct: [],
    prodCategory: [],
    isActive: false
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
        case SET_PRODUCT_CATEGORY:
            return {
                ...state,
                prodCategory: action.payload

            }
        case SET_IS_ACTIVE:
            return {
                ...state,
                isActive: action.payload

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
export const setProductCategory = (prod) => ({
    type: SET_PRODUCT_CATEGORY,
    payload: prod

})
export const setIsActive = (bool) => ({
    type: SET_IS_ACTIVE,
    payload: bool

})

