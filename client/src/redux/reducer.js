import { GET_BRANDS } from "./constants";

const initialState = {
    //Aca van todos los estados
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
            }

        default: return state;
    }
}

export default rootReducer;