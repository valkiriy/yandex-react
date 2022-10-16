import React, {useCallback, useState} from 'react';
import styles from "../login/login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {requestSavePassword} from "../../services/api";
import {useUser} from "../../services/user";

// import styles from "./reset-password.module.css";


function ResetPassword(){
    let user = useUser();

    const history = useHistory();
    const [form, setValue] = useState({ password: '', code: '' });
    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    let request = useCallback(
        e => {
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

    if (user.user) {
        history.replace('/')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <div className={styles.title}>Восстановление пароля</div>
                <div className={`pt-6 ${styles.field}`}>
                    <PasswordInput
                        value={form.password}
                        onChange={onChange}
                        name={'password'}
                    />
                </div>
                <div className={`pt-6 ${styles.field}`}>
                    <EmailInput
                        value={form.code}
                        onChange={onChange}
                        name={'code'}
                    />
                </div>
                <div className={`pt-6`}>
                    <Button htmlType={"button"} type="primary" onClick={request} size="medium">
                        Сохранить
                    </Button>
                </div>
                <div className={`pt-20 text text_type_main-default`}>
                    Вспомнили пароль? <Link to={"/login"} className={styles.link}>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;