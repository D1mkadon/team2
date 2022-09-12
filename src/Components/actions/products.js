import axios from "axios";

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
export const getCategory = async () => {
    const response = await api.get(`/products/categories`)
    return response.data

}
export const getCategoryProducts = async (catProd) => {
    const response = await api.get(`/products/category/${catProd}`)
    return response.data

}

