import React, {ChangeEvent, useCallback, useState} from 'react';

import styles from "./forgot-password.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {requestResetPassword} from "../../services/api";
import {useUser} from "../../services/user";

function ForgotPassword(){
    const user = useUser();

    const history = useHistory();
    const [form, setValue] = useState({ email: '' });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const request = useCallback(
        e => {
            e.preventDefault();
            requestResetPassword(form.email).then(res => {
                if (res && res.success) {
                    history.replace({ pathname: '/reset-password', state: {code_send: true} });
                }else{
                    alert('Что-то пошло не так');
                }
            })
        },
        [form]
    );


    if (user && user.user) {
        history.replace('/')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <form onSubmit={request}>
                    <div className={styles.title}>Восстановление пароля</div>
                    <div className={`pt-6 ${styles.field}`}>
                        <Input
                            type={'email'}
                            value={form.email}
                            onChange={onChange}
                            name={'email'}
                            placeholder={'Укажите e-mail'}
                        />
                    </div>
                    <div className={`pt-6`}>
                        <Button htmlType={"submit"} type="primary" size="medium">
                            Восстановить
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

export default ForgotPassword;