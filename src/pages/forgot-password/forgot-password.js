import React, {useCallback, useState} from 'react';

import styles from "./forgot-password.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {requestResetPassword} from "../../services/api";
import {useUser} from "../../services/user";

function ForgotPassword(){
    let user = useUser();

    const history = useHistory();
    const [form, setValue] = useState({ email: '' });
    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    let request = useCallback(
        e => {
            requestResetPassword(form.email).then(res => {
                if (res && res.success) {
                    history.replace({ pathname: '/reset-password' });
                }else{
                    console.log(res)
                    alert('Что-то пошло не так');
                }
            })
        },
        [form]
    );


    if (user.user) {
        history.replace('/')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
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
                    <Button htmlType={"button"} type="primary" onClick={request} size="medium">
                        Восстановить
                    </Button>
                </div>
                <div className={`pt-20 text text_type_main-default`}>
                    Вспомнили пароль? <Link to={"/login"} className={styles.link}>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;