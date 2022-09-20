const SET_PRODUCTS = "SET_PRODUCTS"
const SET_IS_FETCH = "SET_IS_FETCH"
const SET_IS_ACTIVE = "SET_IS_ACTIVE"
const SET_SEARCHVALUE = "SET_SEARCHVALUE"
const SET_PRODUCTS_CURRENT = "SET_PRODUCTS_CURRENT"
const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY"
const SET_CURRENT_SEARCHVALUE = "SET_CURRENT_SEARCHVALUE"
const SET_SINGLE_CURRENT = "SET_SINGLE_CURRENT"
const SET_ALLPRODUCTS_CURRENT = "SET_ALLPRODUCTS_CURRENT"

const defaulStore = {
    items: [],
    prodCategory: [],
    searchValue: [],
    isActive: false,
    categoryProducts: [],
    singleProduct:[],
    isFetching: true,
}

export default function productsReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                // searchValue: action.payload,
                isFetching: false
            }
        
     
        // case SET_CURRENT_SEARCHVALUE:
        //     return {
        //         ...state,
        //         searchValue: state.searchValue.filter((prod)=>prod.category === action.payload)
        //     }
        // case SET_PRODUCTS_CURRENT:
        //     return {
        //         ...state,
        //         categoryProducts: state.searchValue.filter((prod)=>prod.category === action.payload) 

        //     }
        // case SET_ALLPRODUCTS_CURRENT:
        //     return {
        //         ...state,
        //         categoryProducts: state.items

        //     }
        case SET_PRODUCT_CATEGORY:
            return {
                ...state,
                prodCategory: action.payload

            }
        case SET_SINGLE_CURRENT:
            return {
                ...state,
                singleProduct: action.payload

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
// export default function productsReducer(state = defaulStore, action) {
//     switch (action.type) {
//         case SET_PRODUCTS:
//             return {
//                 ...state,
//                 items: action.payload,
//                 isFetching: false
//             }
//         case SET_IS_FETCH:
//             return {
//                 ...state,
//                 isFetching: action.payload
//             }
//        
//         case SET_CURRENT_SEARCHVALUE:
//             return {
//                 ...state,
//                 searchValue: state.searchValue.filter((prod)=>prod.category === action.payload)
//             }
//         case SET_PRODUCTS_CURRENT:
//             return {
//                 ...state,
//                 categoryProducts: state.searchValue.filter((prod)=>prod.category === action.payload) 

//             }
//         case SET_ALLPRODUCTS_CURRENT:
//             return {
//                 ...state,
//                 categoryProducts: state.items

//             }
//         case SET_PRODUCT_CATEGORY:
//             return {
//                 ...state,
//                 prodCategory: action.payload

//             }
//         case SET_SINGLE_CURRENT:
//             return {
//                 ...state,
//                 singleProduct: action.payload

//             }
//         case SET_IS_ACTIVE:
//             return {
//                 ...state,
//                 isActive: action.payload

//             }
        

//         default:
//             return state
//     }

// }










export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products

})
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCH,
    payload: bool

})

export const setCaregorySearchValue = (category) => ({
    type: SET_CURRENT_SEARCHVALUE,
    payload: category

})
export const setCurrentProduct = (prod) => ({
    type: SET_PRODUCTS_CURRENT,
    payload: prod

})
export const setAllCurrentProduct = (prod) => ({
    type: SET_ALLPRODUCTS_CURRENT,
    payload: prod

})
export const setSingleProduct = (prod) => ({
    type: SET_SINGLE_CURRENT,
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

