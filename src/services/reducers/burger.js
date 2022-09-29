import {ADD_INGREDIENT, REMOVE_INGREDIENT, SET_BUN, SET_INGREDIENT_INDEX} from "../actions/burger"

const initialState = {
    bun: null,
    ingredients: [],
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUN: {
            return {
                ...state,
                bun: action.ingredient
            };
        }
        case ADD_INGREDIENT: {
            const ingrs = state.ingredients;
            ingrs.push(action.ingredient)
            return {
                ...state,
                ingredients: ingrs
            };
        }
        case SET_INGREDIENT_INDEX: {
            const newIngrs = [...state.ingredients];
            const ingredient = newIngrs[action.dragIndex]
            newIngrs.splice(action.dragIndex, 1)
            newIngrs.splice(action.hoverIndex, 0, ingredient)
            return {
                ...state,
                ingredients: newIngrs
            };
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients.filter((_, index) => index !== action.index)]
            };
        }
        default:
            return state;
    }
}