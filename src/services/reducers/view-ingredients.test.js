import {viewIngredientReducer, initialState as state} from "./view-ingredient";
import * as types from "../constants/view-ingridient"

describe("view-ingredients reducer", () => {
    it('should return the initial state', () => {
        expect(viewIngredientReducer(state, {})).toEqual(state)
    })

    it("should handle SHOW_MODAL", () => {
        expect(viewIngredientReducer(state, {
            type: types.SHOW_MODAL
        })).toEqual({
            ...state,
            showModal: true,
        })
    })

    it("should handle HIDE_MODAL", () => {
        expect(viewIngredientReducer(state, {
            type: types.HIDE_MODAL
        })).toEqual({
            ...state,
            showModal: false,
        })
    })

    it("should handle SET_INGREDIENT", () => {
        expect(viewIngredientReducer(state, {
            type: types.SET_INGREDIENT,
            ingredient: {
                id: 'test'
            }
        })).toEqual({
            ...state,
            ingredient: {
                id: 'test'
            }
        })
    })


})