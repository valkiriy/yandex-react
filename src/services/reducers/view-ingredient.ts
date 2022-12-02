import {TIngredient} from "../../utils/types";
import {TViewIngredientActions} from "../actions/view-ingridient";
import {HIDE_MODAL, SET_INGREDIENT, SHOW_MODAL} from "../constants/view-ingridient";

type TInitialState = {
    showModal: boolean,
    ingredient: TIngredient | {}
}

export const initialState:TInitialState = {
    showModal: false,
    ingredient: {}
}

export const viewIngredientReducer = (state = initialState, action: TViewIngredientActions): TInitialState => {
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
            return {
                ...state,
                ingredient: action.ingredient,
            };
        }
        default:
            return state;
    }
}