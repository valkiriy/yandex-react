import {requestMakeOrder} from "../api";
import {
    HIDE_MODAL_INFO_ORDER,
    SEND_ORDER_FAILED,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    SHOW_MODAL_INFO_ORDER
} from "../constants/order";
import {AppDispatch, AppThunk, TIngredient, TOrder} from "../../utils/types";


export interface ISendOrderRequest {
    readonly type: typeof SEND_ORDER_REQUEST
}

export interface ISendOrderSuccess {
    readonly type: typeof SEND_ORDER_SUCCESS
    readonly info: TOrder
}

export interface ISendOrderFailed {
    readonly type: typeof SEND_ORDER_FAILED
}

export interface IShowModalInfoOrder {
    readonly type: typeof SHOW_MODAL_INFO_ORDER
}

export interface IHideModalInfoOrder {
    readonly type: typeof HIDE_MODAL_INFO_ORDER
}

export type TOrderActions = ISendOrderRequest | ISendOrderSuccess | ISendOrderFailed | IShowModalInfoOrder | IHideModalInfoOrder;

export const sendOrder: AppThunk = (ingredients: TIngredient[]) => (dispatch: AppDispatch) => {
    dispatch({
        type: SEND_ORDER_REQUEST
    })

    let ids = ingredients.map(x => x._id);

    requestMakeOrder(ids).then(res => {
        if (res && res.success) {
            dispatch({
                type: SEND_ORDER_SUCCESS,
                info: res.order
            });
            dispatch({
                type: SHOW_MODAL_INFO_ORDER,
            });
        } else {
            dispatch({
                type: SEND_ORDER_FAILED
            });
        }
    }).catch(() => {
        dispatch({
            type: SEND_ORDER_FAILED
        })
    })
}