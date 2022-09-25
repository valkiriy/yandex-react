import {GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED} from "../actions/ingridients"

const initialState = {
    request: false,
    failed: false,
    items: [],
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                request: true,
                failed: false,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                items: action.items,
                request: false,
                failed: false,
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                request: false,
                failed: true,
            };
        }
        default:
            return state;
    }
}