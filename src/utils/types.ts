import {TLoadIngredientsActions} from "../services/actions/ingridients"
import {store} from "../services/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionCreator} from "redux";
import {TOrderActions} from "../services/actions/order";
import {TWSActions} from "../services/actions/ws";
import {TBurgerActions} from "../services/actions/burger";

import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";

export enum TypeIngredient {
    BUN = 'bun',
    MAIN = 'main',
    SAUCE = 'sauce',
}

export enum OrderStatus {
    CREATED = "created",
    PENDING = "pending",
    DONE = "done",
}

export type TIngredient = {
    _id: string,
    uuid?: string,
    name: string,
    type: TypeIngredient,
    proteins?: number,
    fat?: number,
    carbohydrates?: number,
    calories?: number,
    price: number,
    image: string,
    image_large: string,
    image_mobile?: string
}

export type TFormRegister = {
    email: string,
    password: string,
    name: string,
}

export type TFormLogin = {
    email: string,
    password: string,
}

export type TUser = {
    [key: string]: string
}

export type TUserSave = {
    email: string,
    password: string,
    name: string
}

export type TProviderUser = {
    register: (form: TFormRegister) => Promise<any>,
    login: (form: TFormLogin) => Promise<void>,
    logout: () => Promise<any>,
    loadUserInfo: () => Promise<any>,
    saveUserInfo: (form: TUserSave) => Promise<any>,
    updateToken: () => void,
    user: TUser | null
}

export type TBackendUser = {
    user: TUser;
    refreshToken?: string;
    accessToken?: string;
}

export type TOrder = {
    _id: string;
    ingredients: string[];
    status: 'created' | 'pending' | 'done';
    name: string;
    createdAt: string;
    updateAt: string;
    number: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TLoadIngredientsActions | TOrderActions | TWSActions | TBurgerActions;

export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, RootState, never, TApplicationActions>
>;

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook