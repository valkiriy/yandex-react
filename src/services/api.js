import {getCookie, request} from "./utils";

const API_URL = "https://norma.nomoreparties.space/api"

export function requestGetIngredients() {
    return request(`${API_URL}/ingredients`, {method: 'GET'})
}

export function requestMakeOrder(ingredients) {
    return request(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ingredients: ingredients})
    })
}

export function requestResetPassword(email){
    return request(`${API_URL}/password-reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    })
}

export function requestSavePassword(password, token){
    return request(`${API_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, token})
    })
}

export function requestRegister(email, password, name){
    return request(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password, name})
    })
}

export function requestLogin(email, password, name){
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

export function requestSaveUser(email, password, name){
    return request(`${API_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + getCookie('access_token')
        },
        body: JSON.stringify({email, password, name})
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
