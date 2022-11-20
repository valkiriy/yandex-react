import {TOrderActions} from "../actions/order";
import {
    HIDE_MODAL_INFO_ORDER,
    SEND_ORDER_FAILED,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    SHOW_MODAL_INFO_ORDER
} from "../constants/order";

import {TOrder} from "../../utils/types";

type TInitialState = {
    request: boolean;
    failed: boolean;
    show_info: boolean;
    info: TOrder | null;
}

const initialState: TInitialState = {
    request: false,
    failed: false,
    show_info: false,
    info: null
}

export const orderReducer = (state = initialState, action: TOrderActions): TInitialState => {
    switch (action.type) {
        case SHOW_MODAL_INFO_ORDER: {
            return {
                ...state,
                show_info: true,
            };
        }
        case HIDE_MODAL_INFO_ORDER: {
            return {
                ...state,
                show_info: false,
            };
        }
        case SEND_ORDER_REQUEST: {
            return {
                ...state,
                request: true,
                failed: false,
            };
        }
        case SEND_ORDER_SUCCESS: {
            return {
                ...state,
                info: action.info,
                request: false,
                failed: false,
            };
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                info: null,
                request: false,
                failed: true,
            };
        }
        default:
            return state;
    }
}

