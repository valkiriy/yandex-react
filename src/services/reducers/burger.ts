import {ADD_INGREDIENT, REMOVE_INGREDIENT, SET_BUN, SET_INGREDIENT_INDEX} from "../constants/burger"

import {TIngredient} from "../../utils/types";
import type {TBurgerActions} from "../actions/burger"

type TBurgerState = {
    bun: TIngredient | null;
    ingredients: TIngredient[];
}

const initialState: TBurgerState = {
    bun: null,
    ingredients: [],
}

export const burgerReducer = (state = initialState, action: TBurgerActions):TBurgerState  => {
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