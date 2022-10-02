import {SHOW_MODAL, HIDE_MODAL, SET_INGREDIENT} from "../actions/view-ingridient"

const initialState = {
    showModal: false,
    ingredient: {}
}

export const viewIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                showModal: true,
            };
        }
        case HIDE_MODAL: {
            return {
                ...state,
                showModal: false,
            };
        }
        case SET_INGREDIENT: {
            console.log(action)
            return {
                ...state,
                ingredient: action.ingredient,
            };
        }
        default:
            return state;
    }
}