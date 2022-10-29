import {uuidv4} from "../utils";

export const SET_BUN = "SET_BUN";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const SET_INGREDIENT_INDEX = "SET_INGREDIENT_INDEX";

export function AddIngredientBurger(item){
    return {
        type: ADD_INGREDIENT,
        ingredient: {...item, uuid: uuidv4()}
    }
}