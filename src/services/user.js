import React, {useContext, createContext, useState} from 'react';
import {deleteCookie, getCookie, setCookie} from "./utils";
import {infoUser, loginUser, logoutUser, registerUser, saveInfoUser, updateTokenUser} from "./actions/auth";
import {useDispatch} from "react-redux";

// создаем контекст авторизации, значения по умолчанию вычислить изначально не возможно = undefined
const UserContext = createContext(undefined);

// враппер, провайдер авторизации, используем хук в качестве значения, которое пробросим во всех потомков
export function ProvideUser({ children }) {
    const user = useProvideUser();
    return (<UserContext.Provider value={user}>{children}</UserContext.Provider>);
}

// хук авторизации, из хука реакта. который вохвращает переданные значения в контекст
export function useUser() {
    return useContext(UserContext);
}

export function useProvideUser() {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    const register = (form) => {
        return dispatch(registerUser(form)).then((data) => {
            setCookie('access_token', data.accessToken.split("Bearer ")[1]);
            setCookie('refresh_token', data.refreshToken);
            setUser({ ...data.user});
        })
    }

    const login = (form) => {
        return dispatch(loginUser(form)).then((data) => {
            setCookie('access_token', data.accessToken.split("Bearer ")[1]);
            setCookie('refresh_token', data.refreshToken);
            setUser({ ...data.user});
        })
    }

    const logout = () => {
        return dispatch(logoutUser()).then(() => {
            deleteCookie('access_token');
            deleteCookie('refresh_token');
            setUser(null);
        })
    }

    const loadUserInfo = () => {
        if(getCookie('access_token')){
            return dispatch(infoUser()).then(data => {
                setUser({ ...data.user});
            }).catch(e => {
                return updateToken()
            })
        }
        return Promise.reject();
    }

    const saveUserInfo = (email, password, name) => {
        return dispatch(saveInfoUser(email, password, name)).then(data => {
            setUser({ ...data.user});
        })
    }

    const updateToken = () => {
        return dispatch(updateTokenUser()).then(data => {
            setCookie('access_token', data.accessToken.split("Bearer ")[1]);
            setCookie('refresh_token', data.refreshToken);
        }).catch(() => {
            logout()
        })
    }

    // если юзер не определен, то делаем запрос на сервер для получения данных
    // то есть чтобы при перезагрузке страницы сразу подтягивался юзер
    if(!user){
        loadUserInfo().catch(() => {})
    }

    return {
        register,
        login,
        logout,
        loadUserInfo,
        saveUserInfo,
        updateToken,
        user,
    }
}