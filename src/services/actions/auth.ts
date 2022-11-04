import {requestLogin, requestLogout, requestRegister, requestSaveUser, requestToken, requestUser} from "../api";
import {TFormLogin, TFormRegister} from "../../utils/types";

export const loginUser = (form: TFormLogin) => () => {
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

export const registerUser = (form: TFormRegister) => () => {
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

export const logoutUser = () => () => {
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

export const infoUser = () => () => {
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

export const saveInfoUser = (email: string, password: string, name: string) => () => {
    return requestSaveUser(email, password, name).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const updateTokenUser = () => () => {
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