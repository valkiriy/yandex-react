import {requestLogin, requestLogout, requestRegister, requestSaveUser, requestToken, requestUser} from "../api";

export const loginUser = (form) => () => {
    return requestLogin(form.email, form.password).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch(() => {
        return Promise.reject();
    })
}

export const registerUser = (form) => () => {
    return requestRegister(form.email, form.password, form.name).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch(() => {
        return Promise.reject();
    })
}

export const logoutUser = () => () => {
    return requestLogout().then((res) => {
        if (res && res.success) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }).catch(() => {
        return Promise.reject();
    })
}

export const infoUser = () => () => {
    return requestUser().then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject(res);
        }
    }).catch(() => {
        return Promise.reject();
    })
}

export const saveInfoUser = (email, password, name) => () => {
    return requestSaveUser(email, password, name).then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch(() => {
        return Promise.reject();
    })
}

export const updateTokenUser = () => () => {
    return requestToken().then((res) => {
        if (res && res.success) {
            return Promise.resolve(res);
        } else {
            return Promise.reject();
        }
    }).catch(() => {
        return Promise.reject();
    })
}