import { combineReducers } from 'redux';
import {burgerReducer as burger} from "./burger";
import {ingredientsReducer as ingredients} from "./ingredients";
import {orderReducer as order} from "./order";
import {viewIngredientReducer as viewIngredient} from "./view-ingredient";

export const rootReducer = combineReducers({
    burger,
    ingredients,
    order,
    viewIngredient,
})