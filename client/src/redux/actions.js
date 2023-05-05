import axios from "axios";
import { GET_BRANDS, GET_BRANDS_BY_NAME, GET_BRANDS_BY_QUERY, GET_BRANDS_ID, GET_PRODUCTS, GET_PRODUCTS_BY_NAME, GET_PRODUCTS_BY_QUERY, GET_PRODUCTS_ID } from "./constants";

export function getAllBrands() {
    return async (dispatch) => {
        try {
            let request = await axios.get("http://localhost:3001/brands");
            return dispatch({
                type: GET_BRANDS,
                payload: request.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getBrandsId(id) {
    return async (dispatch) => {
        try {
            let request = await axios.get(`http://localhost:3001/brands/${id}`);
            return dispatch({
                type: GET_BRANDS_ID,
                payload: request.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getBrandsByName(name) {
    return {
        type: GET_BRANDS_BY_NAME,
        payload: name
    }
}

export function getBrandsByQuery(name) {
    return async (dispatch) => {
        try {
            let request = axios.get(`http://localhost:3001/brands?name=${name}`);
            return dispatch({
                type: GET_BRANDS_BY_QUERY,
                payload: request.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postBrand(payload) {
    return async () => {
        try {
            let request = await axios.post("http://localhost:3001/products", payload);
            return request
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllProducts() {
    return async (dispatch) => {
        try {
            let request = await axios.get("http://localhost:3001/products");
            return dispatch({
                type: GET_PRODUCTS,
                payload: request.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProductsId(id) {
    return async (dispatch) => {
        try {
            let request = await axios.get(`http://localhost:3001/products/${id}`);
            return dispatch({
                type: GET_PRODUCTS_ID,
                payload: request.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProductsByName(name) {
    return {
        type: GET_PRODUCTS_BY_NAME,
        payload: name
    }
}

export function getProductsByQuery(name) {
    return async (dispatch) => {
        try {
            let request = axios.get(`http://localhost:3001/products?name=${name}`);
            return dispatch({
                type: GET_PRODUCTS_BY_QUERY,
                payload: request.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postProduct(payload) {
    return async () => {
        try {
            let request = await axios.post("http://localhost:3001/products", payload);
            return request
        } catch (error) {
            console.log(error)
        }
    }
}
