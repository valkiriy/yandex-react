import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useUser} from "../../services/user";

import styles from "./profile.module.css";
import {Input, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {TUserSave} from "../../utils/types";

function Profile(){

    const user = useUser();
    const [isChangeForm, setIsChangeForm] = useState(false)

    const [form, setValue] = useState<TUserSave>({
        name: user && user.user ? user.user.name : "",
        email: user && user.user ? user.user.email : "",
        password: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChangeForm(true);
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const save = (e: FormEvent) => {
        e.preventDefault();
        setIsChangeForm(false);
        user && user.saveUserInfo(form)
    };

    const cancel = () => {
        console.log('cancel')
        setIsChangeForm(false);
        setValue({
            name: user && user.user ? user.user.name : "",
            email: user && user.user ? user.user.email : "",
            password: ''
        })
    };

    return (
        <div>
            <form onSubmit={save}>
            <div className={`${styles.field}`}>
                <Input
                    type={'text'}
                    value={form.name}
                    onChange={onChange}
                    name={'name'}
                    placeholder={'Имя'}
                />
            </div>
            <div className={`pt-6 ${styles.field}`}>
                <Input
                    type={'email'}
                    value={form.email}
                    onChange={onChange}
                    name={'email'}
                    placeholder={'E-mail'}
                />
            </div>
            <div className={`pt-6 ${styles.field}`}>
                <PasswordInput
                    value={form.password}
                    onChange={onChange}
                    name={'password'}
                />
            </div>

            { !isChangeForm ||
                (<div className={"pt-5"}>
                    <Button htmlType={"submit"} type="primary">
                        Сохранить изменения
                    </Button>
                    <Button htmlType={"button"} type="secondary" onClick={() => cancel()}>
                        Отмена
                    </Button>
                </div>)
            }
            </form>
        </div>
    )
}

export default Profile;