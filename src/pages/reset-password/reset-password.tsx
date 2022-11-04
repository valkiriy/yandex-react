import React, {ChangeEvent, useCallback, useState} from 'react';
import styles from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory, useLocation} from "react-router-dom";
import {requestSavePassword} from "../../services/api";
import {useUser} from "../../services/user";

// import styles from "./reset-password.module.css";


function ResetPassword(){
    const user = useUser();

    const {state} = useLocation()

    const history = useHistory();
    const [form, setValue] = useState({ password: '', code: '' });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const request = useCallback(
        e => {
            e.preventDefault();
            requestSavePassword(form.password, form.code).then(res => {
                if (res && res.success) {
                    history.replace({ pathname: '/login' });
                }else{
                    console.log(res)
                    alert('Что-то пошло не так');
                }
            })
        },
        [form, history]
    );

    // @ts-ignore
    if (user.user) {
        history.replace('/')
    }


    // @ts-ignore
    if(!state || !state.hasOwnProperty('code_send')){
        history.replace('/forgot-password')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <form onSubmit={request}>
                    <div className={styles.title}>Восстановление пароля</div>
                    <div className={`pt-6 ${styles.field}`}>
                        <PasswordInput
                            value={form.password}
                            onChange={onChange}
                            name={'password'}
                        />
                    </div>
                    <div className={`pt-6 ${styles.field}`}>
                        <Input
                            value={form.code}
                            onChange={onChange}
                            name={'code'}
                        />
                    </div>
                    <div className={`pt-6`}>
                        <Button htmlType={"submit"} type="primary" size="medium">
                            Сохранить
                        </Button>
                    </div>
                    <div className={`pt-20 text text_type_main-default`}>
                        Вспомнили пароль? <Link to={"/login"} className={styles.link}>Войти</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;