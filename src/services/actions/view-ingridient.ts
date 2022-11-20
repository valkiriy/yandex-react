import {HIDE_MODAL, SET_INGREDIENT, SHOW_MODAL} from "../constants/view-ingridient";
import {TIngredient} from "../../utils/types";

export interface IShowModal {
    readonly type: typeof SHOW_MODAL
}

export interface IHideModal {
    readonly type: typeof HIDE_MODAL
}

export interface ISetIngredient {
    readonly type: typeof SET_INGREDIENT
    readonly ingredient: TIngredient
}

export type TViewIngredientActions = IShowModal | IHideModal | ISetIngredient
