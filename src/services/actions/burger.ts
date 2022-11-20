import {uuidv4} from "../utils";

import {TIngredient} from "../../utils/types"
import {ADD_INGREDIENT, REMOVE_INGREDIENT, SET_BUN, SET_INGREDIENT_INDEX} from "../constants/burger";

export interface IAddIngredientBurger {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient
}

export interface ISetBunBurger {
    readonly type: typeof SET_BUN;
    readonly ingredient: TIngredient
}

export interface IRemoveIngredient {
    readonly type: typeof REMOVE_INGREDIENT;
    readonly index: number
}

export interface ISetIngredientIndex{
    readonly type: typeof SET_INGREDIENT_INDEX;
    readonly dragIndex: number;
    readonly hoverIndex: number;
}

export type TBurgerActions = IAddIngredientBurger | ISetBunBurger | ISetIngredientIndex | IRemoveIngredient;

export const AddIngredientBurger = (item: TIngredient): IAddIngredientBurger => ({
    type: ADD_INGREDIENT,
    ingredient: {...item, uuid: uuidv4()}
})

