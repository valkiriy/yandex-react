import {requestGetIngredients} from "../api";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants/ingridients";
import {AppDispatch, AppThunk, TIngredient} from "../../utils/types";

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
    readonly items: TIngredient[]
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED
}



export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: GET_INGREDIENTS_REQUEST
    })
    requestGetIngredients().then(res => {
        if (res && res.success) {
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                items: res.data
            });
        } else {
            dispatch({
                type: GET_INGREDIENTS_FAILED
            });
        }
    }).catch(() => {
        dispatch({
            type: GET_INGREDIENTS_FAILED
        })
    })
}


export type TLoadIngredientsActions = IGetIngredientsRequest | IGetIngredientsSuccess | IGetIngredientsFailed;