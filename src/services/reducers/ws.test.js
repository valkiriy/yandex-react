import {wsReducer, initialState as state} from "./ws";
import * as types from "../constants/ws"

describe("ws reducer", () => {

    it('should return the initial state', () => {
        expect(wsReducer(state, {})).toEqual(state)
    })

    it("should handle WS_CONNECTION_START", () => {
        expect(wsReducer(state, {
            type: types.WS_CONNECTION_START,
        })).toEqual({
            ...state,
        })
    })

    it("should handle WS_CONNECTION_SUCCESS", () => {
        expect(wsReducer(state, {
            type: types.WS_CONNECTION_SUCCESS,
        })).toEqual({
            ...state,
            wsConnected: true,
        })
    })

    it("should handle WS_CONNECTION_ERROR", () => {
        expect(wsReducer(state, {
            type: types.WS_CONNECTION_ERROR,
            event: 'text error'
        })).toEqual({
            ...state,
            wsConnected: false,
            error: 'text error'
        })
    })

    it("should handle WS_GET_MESSAGE", () => {
        expect(wsReducer(state, {
            type: types.WS_GET_MESSAGE,
            data: {},
            cntAll: 1,
            cntToday: 2,
        })).toEqual({
            ...state,
            body: {},
            cntAll: 1,
            cntToday: 2,
        })
    })

    it("should handle WS_CONNECTION_CLOSED", () => {
        expect(wsReducer(state, {
            type: types.WS_CONNECTION_CLOSED,
        })).toEqual({
            ...state,
            wsConnected: false,
        })
    })

})