import {TWSActions} from "../actions/ws";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from "../constants/ws";
import {TOrder} from "../../utils/types";

type TWSState = {
    wsConnected: boolean;
    cntToday: number;
    cntAll: number;
    body: TOrder[];
    error?: Event;
}

const initialState: TWSState = {
    wsConnected: false,
    cntToday: 0,
    cntAll: 0,
    body: []
};


export const wsReducer = (state = initialState, action: TWSActions):TWSState  => {
    switch (action.type) {
        case WS_CONNECTION_START: {
            return {
                ...state,
            };
        }
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true,
            };
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnected: false,
                error: action.event
            };
        }
        case WS_GET_MESSAGE: {
            return {
                ...state,
                body: action.data,
                cntAll: action.cntAll,
                cntToday: action.cntToday,
            };
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnected: false,
            };
        }
        default:
            return state;
    }
}