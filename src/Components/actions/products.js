import axios from "axios";
import { setIsFetching, setProducts } from "../reducers/productsReducer";

export const getProducts = (product) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://fakestoreapi.com/products`)
        dispatch(setProducts(response.data))
    }
}