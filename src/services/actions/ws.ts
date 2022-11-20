import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START, WS_CONNECTION_STOP,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from "../constants/ws";
import {TOrder} from "../../utils/types";


export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    readonly url: string
}

export interface IWsConnectionStop {
    readonly type: typeof WS_CONNECTION_STOP;
}

export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly event: Event
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly event: Event
}

export interface IWsGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly data: TOrder[]
    readonly cntAll: number
    readonly cntToday: number
}

export interface IWsConnectionClose {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly event: Event
}

export type TWSActions = IWsConnectionStart | IWsConnectionSuccess | IWsConnectionError | IWsGetMessage | IWsConnectionClose | IWsConnectionStop;

export const WsConnectionStart = (url: string): IWsConnectionStart => ({
    type: WS_CONNECTION_START,
    url: url
})

export const WsConnectionStop = (): IWsConnectionStop => ({
    type: WS_CONNECTION_STOP,
})

export const WsConnectionSuccess = (event: Event): IWsConnectionSuccess => ({
    type: WS_CONNECTION_SUCCESS,
    event: event
})

export const WsConnectionError = (event: Event): IWsConnectionError => ({
    type: WS_CONNECTION_ERROR,
    event: event
})

export const WsGetMessage = (data: TOrder[], cntToday: number, cntAll: number): IWsGetMessage => ({
    type: WS_GET_MESSAGE,
    data: data,
    cntAll: cntAll,
    cntToday: cntToday
})

export const WsConnectionClose = (event: Event): IWsConnectionClose => ({
    type: WS_CONNECTION_CLOSED,
    event: event
})