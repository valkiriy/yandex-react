import {orderReducer, initialState as state} from "./order";
import * as types from "../constants/order"

describe("order reducer", () => {

    it('should return the initial state', () => {
        expect(orderReducer(state, {})).toEqual(state)
    })

    it("should handle SHOW_MODAL_INFO_ORDER", () => {
        expect(orderReducer(state, {
            type: types.SHOW_MODAL_INFO_ORDER
        })).toEqual({
            ...state,
            show_info: true,
        })
    })

    it("should handle HIDE_MODAL_INFO_ORDER", () => {
        expect(orderReducer(state, {
            type: types.HIDE_MODAL_INFO_ORDER
        })).toEqual({
            ...state,
            show_info: false,
        })
    })

    it("should handle SEND_ORDER_REQUEST", () => {
        expect(orderReducer(state, {
            type: types.SEND_ORDER_REQUEST
        })).toEqual({
            ...state,
            request: true,
            failed: false,
        })
    })

    it("should handle SEND_ORDER_SUCCESS", () => {
        expect(orderReducer(state, {
            type: types.SEND_ORDER_SUCCESS,
            info: {
                id: '1'
            }
        })).toEqual({
            ...state,
            info: {
                id: '1'
            },
            request: false,
            failed: false,
        })
    })

    it("should handle SEND_ORDER_FAILED", () => {
        expect(orderReducer(state, {
            type: types.SEND_ORDER_FAILED,
        })).toEqual({
            ...state,
            info: null,
            request: false,
            failed: true,
        })
    })

})