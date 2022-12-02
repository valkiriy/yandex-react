import {ingredientsReducer, initialState as state} from "./ingredients";
import * as types from "../constants/ingridients"

describe("order reducer", () => {

    it('should return the initial state', () => {
        expect(ingredientsReducer(state, {})).toEqual(state)
    })

    it("should handle GET_INGREDIENTS_REQUEST", () => {
        expect(ingredientsReducer(state, {
            type: types.GET_INGREDIENTS_REQUEST
        })).toEqual({
            ...state,
            request: true,
            failed: false,
        })
    })

    it("should handle GET_INGREDIENTS_SUCCESS", () => {
        expect(ingredientsReducer(state, {
            type: types.GET_INGREDIENTS_SUCCESS,
            items: [{
                id: 1
            }]
        })).toEqual({
            ...state,
            items: [{
                id: 1
            }],
            request: false,
            failed: false,
        })
    })

    it("should handle GET_INGREDIENTS_FAILED", () => {
        expect(ingredientsReducer(state, {
            type: types.GET_INGREDIENTS_FAILED
        })).toEqual({
            ...state,
            request: false,
            failed: true,
        })
    })

})