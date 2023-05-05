import { GET_BRANDS, GET_BRANDS_BY_NAME, GET_BRANDS_BY_QUERY, GET_BRANDS_ID, GET_PRODUCTS, GET_PRODUCTS_BY_NAME, GET_PRODUCTS_BY_QUERY, GET_PRODUCTS_ID } from "./constants";

const initialState = {
    products: [],
    allProducts: [],
    brands: [],
    allBrands: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: action.payload,
                allBrands: action.payload
            }

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }

        case GET_BRANDS_ID:
            return {
                ...state,
                detail: action.payload
            }

        case GET_PRODUCTS_ID:
            return {
                ...state,
                detail: action.payload
            }

        case GET_BRANDS_BY_QUERY:
            return {
                ...state,
                brands: action.payload
            }

        case GET_PRODUCTS_BY_QUERY:
            return {
                ...state,
                products: action.payload
            }

    

        default: return state;
    }
}



export default rootReducer;