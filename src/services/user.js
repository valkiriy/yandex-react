import React, {useContext, createContext, useState} from 'react';
import {requestLogin, requestLogout, requestRegister, requestSaveUser, requestToken, requestUser} from "./api";
import {deleteCookie, getCookie, setCookie} from "./utils";

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

    const register = (form) => {
        return new Promise( async (resolve, reject) => {
            await requestRegister(form.email, form.password, form.name).then(data => {
                if (data.success) {
                    setCookie('access_token', data.accessToken.split("Bearer ")[1]);
                    setCookie('refresh_token', data.refreshToken);
                    setUser({ ...data.user});
                    resolve()
                }
                reject()
            }).catch(e => {
                reject()
            })
        })
    }

    const login = (form) => {
        return new Promise( async (resolve, reject) => {
            await requestLogin(form.email, form.password).then(data => {
                if (data.success) {
                    setCookie('access_token', data.accessToken.split("Bearer ")[1]);
                    setCookie('refresh_token', data.refreshToken);
                    setUser({ ...data.user});
                    resolve()
                }
                reject()
            }).catch(e => {
                reject()
            })
        })
    }

    const logout = async () => {
        return new Promise( async (resolve, reject) => {
            await requestLogout().then(data => {
                if (data.success) {
                    deleteCookie('access_token');
                    deleteCookie('refresh_token');
                    setUser(null);
                    resolve()
                }
                reject()
            }).catch(e => {
                reject()
            })
        })
    }

    const loadUserInfo = () => {
        return new Promise( async (resolve, reject) => {
            if(getCookie('access_token')){
                await requestUser().then(data => {
                    if (data.success) {
                        setUser({ ...data.user});
                        resolve()
                    }else if(data.message === 'jwt expired'){
                        updateToken().then(() => {
                            resolve()
                        }).catch(() => {
                            reject()
                        })
                    }
                    reject()
                }).catch(e => {
                    reject()
                })
            }else{
                reject()
            }
        })
    }

    const saveUserInfo = (email, password, name) => {
        return new Promise( async (resolve, reject) => {
            await requestSaveUser({email, password, name}).then(data => {
                if (data.success) {
                    setUser({ ...data.user});
                    resolve()
                }
                reject()
            }).catch(e => {
                reject()
            })
        })
    }

    const updateToken = () => {
        return new Promise( async (resolve, reject) => {
            await requestToken().then(data => {
                if (data.success) {
                    setCookie('access_token', data.accessToken.split("Bearer ")[1]);
                    setCookie('refresh_token', data.refreshToken);
                    resolve()
                }
                reject()
            }).catch(e => {
                reject()
            })
        })
    }

    // если юзер не определен, то делаем запрос на сервер для получения данных
    // то есть чтобы при перезагрузке страницы сразу подтягивался юзер
    if(!user){
        loadUserInfo()
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