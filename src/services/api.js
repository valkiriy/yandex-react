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