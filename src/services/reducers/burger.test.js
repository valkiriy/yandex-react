import {burgerReducer, initialState as state} from "./burger";
import * as types from "../constants/burger"

describe("burger reducer", () => {

    it('should return the initial state', () => {
        expect(burgerReducer(state, {})).toEqual(state)
    })

    it("should handle SET_BUN", () => {
        expect(burgerReducer(state, {
            type: types.SET_BUN,
            ingredient: {
                id: 1
            }
        })).toEqual({
            ...state,
            bun: {
                id: 1
            }
        })
    })

    it("should handle ADD_INGREDIENT", () => {
        expect(burgerReducer(state, {
            type: types.ADD_INGREDIENT,
            ingredient: {
                id: 1
            }
        })).toEqual({
            ...state,
            ingredients: [{id: 1}]
        })
    })

    it("should handle SET_INGREDIENT_INDEX", () => {
        expect(burgerReducer({
            ...state,
            ingredients: [
                {id: 1},
                {id: 2}
            ]
        }, {
            type: types.SET_INGREDIENT_INDEX,
            dragIndex: 0,
            hoverIndex: 1
        })).toEqual({
            ...state,
            ingredients: [
                {id: 2},
                {id: 1}
            ]
        })
    })

    it("should handle REMOVE_INGREDIENT", () => {
        expect(burgerReducer({
            ...state,
            ingredients: [
                {id: 1},
                {id: 2}
            ]
        }, {
            type: types.REMOVE_INGREDIENT,
            index: 1
        })).toEqual({
            ...state,
            ingredients: [
                {id: 1},
            ]
        })
    })


})