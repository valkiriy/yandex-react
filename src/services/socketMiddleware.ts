import type {Middleware, MiddlewareAPI} from 'redux';

import type {AppDispatch, RootState} from '../utils/types';
import {
    WS_CONNECTION_START, WS_CONNECTION_STOP,
} from "./constants/ws";
import {WsConnectionClose, WsConnectionError, WsConnectionSuccess, WsGetMessage} from "./actions/ws";

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action) => {
            const { dispatch } = store;

            if (action.type === WS_CONNECTION_START) {
                socket = new WebSocket(action.url);
            }

            if (action.type === WS_CONNECTION_STOP) {
                socket?.close()
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch(WsConnectionSuccess(event));
                };
                socket.onerror = event => {
                    dispatch(WsConnectionError(event));
                };
                socket.onmessage = event => {
                    const { data } = event;
                    const par = JSON.parse(data)
                    dispatch(WsGetMessage(par.orders, par.totalToday, par.total));
                };
                socket.onclose = (event) => {
                    dispatch(WsConnectionClose(event));
                };
            }
            next(action);
        };
    }) as Middleware;
};