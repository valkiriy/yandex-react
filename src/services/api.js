import {getCookie} from "./utils";

const API_URL = "https://norma.nomoreparties.space/api"

export function requestGetIngredients() {
    return fetch(`${API_URL}/ingredients`, {method: 'GET'}).then(res => res.json())
}

export function requestMakeOrder(ingredients) {
    return fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ingredients: ingredients})
    }).then(res => res.json())
}

export function requestResetPassword(email){
    return fetch(`${API_URL}/password-reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    }).then(res => res.json())
}

export function requestSavePassword(password, token){
    return fetch(`${API_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, token})
    }).then(res => res.json())
}

export function requestRegister(email, password, name){
    return fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password, name})
    }).then(res => res.json())
}

export function requestLogin(email, password, name){
    return fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    }).then(res => res.json())
}

export function requestUser(){
    return fetch(`${API_URL}/auth/user`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + getCookie('access_token')
        },
    }).then(res => res.json())
}

export function requestSaveUser(email, password, name){
    return fetch(`${API_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + getCookie('access_token')
        },
        body: JSON.stringify({email, password, name})
    }).then(res => res.json())
}

export function requestToken(){
    return fetch(`${API_URL}/auth/token`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token: getCookie('refresh_token')})
    }).then(res => res.json())
}


export function requestLogout(){
    return fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token: getCookie('refresh_token')})
    }).then(res => res.json())
}
