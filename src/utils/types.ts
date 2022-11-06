export enum TypeIngredient {
    BUN = 'bun',
    MAIN = 'main',
    SAUCE = 'sauce',
}

export type TIngredient = {
    _id: string,
    uuid?: string,
    name: string,
    type: TypeIngredient,
    proteins?: number,
    fat?: number,
    carbohydrates?: number,
    calories?: number,
    price: number,
    image: string,
    image_large: string,
    image_mobile?: string
}

export type TFormRegister = {
    email: string,
    password: string,
    name: string,
}

export type TFormLogin = {
    email: string,
    password: string,
}

export type TUser = {
    [key: string]: string
}

export type TUserSave = {
    email: string,
    password: string,
    name: string
}

export type TProviderUser = {
    register: (form: TFormRegister) => Promise<any>,
    login: (form: TFormLogin) => Promise<void>,
    logout: () => Promise<any>,
    loadUserInfo: () => Promise<any>,
    saveUserInfo: (form: TUserSave) => Promise<any>,
    updateToken: () => void,
    user: TUser | null
}

export type TBackendUser = {
    user: TUser;
    refreshToken?: string;
    accessToken?: string;
}