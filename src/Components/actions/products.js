import axios from "axios";
import { setIsFetching, setProducts } from "../reducers/productsReducer";

export const api = axios.create({
    baseURL: "https://fakestoreapi.com"
})
export const getProducts = async () => {
    const response = await api.get("/products")
    return response.data

}
export const getSingleProducts = async (id) => {
    const response = await api.get(`/products/${id}`)
    return response.data

}

// export const getProducts = (product) => {
//     return async (dispatch) => {
//         dispatch(setIsFetching(true))
//         const response = await axios.get(`https://fakestoreapi.com/products`)
//         dispatch(setProducts(response.data))
//     }
// }