import {requestLogin, requestLogout, requestRegister, requestSaveUser, requestToken, requestUser} from "../api";
import {TBackendUser, TFormLogin, TFormRegister, TUserSave} from "../../utils/types";

export const loginUser = (form: TFormLogin): Promise<TBackendUser> =>{
    return requestLogin(form.email, form.password).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const registerUser = (form: TFormRegister): Promise<TBackendUser> => {
    return requestRegister(form.email, form.password, form.name).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const logoutUser = (): Promise<unknown> => {
    return requestLogout().then((res) => {
        if (res && res.success) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const infoUser = (): Promise<TBackendUser> => {
    return requestUser().then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject(res);
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const saveInfoUser = (form: TUserSave): Promise<TBackendUser> => {
    return requestSaveUser(form).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const updateTokenUser = (): Promise<TBackendUser> => {
    return requestToken().then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch((err) => {
        console.log(err)
    })
}