import {getCookie, request} from "./utils";
import {TUserSave} from "../utils/types";

const API_URL = "https://norma.nomoreparties.space/api"

export function requestGetIngredients() {
    return request(`${API_URL}/ingredients`, {method: 'GET'})
}

export function requestMakeOrder(ingredients: string[]) {
    return request(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ingredients: ingredients})
    })
}

export function requestResetPassword(email: string){
    return request(`${API_URL}/password-reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    })
}

export function requestSavePassword(password: string, token: string){
    return request(`${API_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, token})
    })
}

export function requestRegister(email: string, password: string, name: string){
    return request(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password, name})
    })
}

export function requestLogin(email: string, password: string){
    return request(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
}

export function requestUser(){
    return request(`${API_URL}/auth/user`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + getCookie('access_token')
        },
    })
}

export function requestSaveUser(form: TUserSave){
    return request(`${API_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + getCookie('access_token')
        },
        body: JSON.stringify(form)
    })
}

export function requestToken(){
    return request(`${API_URL}/auth/token`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token: getCookie('refresh_token')})
    })
}


export function requestLogout(){
    return request(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token: getCookie('refresh_token')})
    })
}
