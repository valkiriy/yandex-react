import {requestMakeOrder} from "../api";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";

export const SHOW_MODAL_INFO_ORDER = "SHOW_MODAL_INFO_ORDER"
export const HIDE_MODAL_INFO_ORDER = "HIDE_MODAL_INFO_ORDER"

export function sendOrder(ingredients){
    return function (dispatch){
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
}