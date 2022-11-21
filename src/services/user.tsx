import React, {useContext, createContext, useState, FC} from 'react';
import {deleteCookie, getCookie, setCookie} from "./utils";
import {infoUser, loginUser, logoutUser, registerUser, saveInfoUser, updateTokenUser} from "./actions/auth";
import {TFormLogin, TFormRegister, TProviderUser, TUser, TUserSave} from "../utils/types";

// создаем контекст авторизации, значения по умолчанию вычислить изначально не возможно = undefined
const UserContext = createContext<TProviderUser | null>(null);

// враппер, провайдер авторизации, используем хук в качестве значения, которое пробросим во всех потомков
export const ProvideUser: FC = ({ children }) => {
    const user = useProvideUser();
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

// хук авторизации, из хука реакта. который вохвращает переданные значения в контекст
export const useUser: () => TProviderUser | null = () => {
    return useContext(UserContext);
}

export function useProvideUser(): TProviderUser {
    const [user, setUser] = useState<TUser | null>(null);

    const register = (form: TFormRegister) => {
        return registerUser(form).then((data) => {
            setCookie('access_token', data.accessToken ? data.accessToken.split("Bearer ")[1] : null);
            setCookie('refresh_token', data.refreshToken || null);
            setUser({ ...data.user});
        })
    }

    const login = (form: TFormLogin) => {
        return loginUser(form).then((data) => {
            setCookie('access_token', data.accessToken ? data.accessToken.split("Bearer ")[1] : null);
            setCookie('refresh_token', data.refreshToken || null);
            setUser({ ...data.user});
        })
    }

    const logout = () => {
        return logoutUser().then(() => {
            deleteCookie('access_token');
            deleteCookie('refresh_token');
            setUser(null);
        })
    }

    const loadUserInfo = () => {
        if(getCookie('access_token')){
            return infoUser().then(data => {
                setUser({ ...data.user});
            }).catch(e => {
                return updateToken()
            })
        }
        return Promise.reject();
    }

    const saveUserInfo = (form: TUserSave) => {
        return saveInfoUser(form).then(data => {
            setUser({ ...data.user});
        })
    }

    const updateToken = () => {
        return updateTokenUser().then(data => {
            setCookie('access_token', data.accessToken ? data.accessToken.split("Bearer ")[1] : null);
            setCookie('refresh_token', data.refreshToken || null);
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