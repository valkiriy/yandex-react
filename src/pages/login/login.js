import React, {useCallback, useState} from 'react';

import styles from "./login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {useUser} from "../../services/user";


function Login(){

    let user = useUser();
    const history = useHistory();

    const [form, setValue] = useState({ email: '', password: '' });
    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    let login = useCallback(
        e => {
            user.login(form).then(() => {
                history.replace(history.location.state.r || '/profile')
            }).catch(() => {
                alert('error login');
            })
        },
        [form, user, history]
    );

    if (user.user) {
        history.replace('/')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <div className={styles.title}>Вход</div>
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
                <div className={`pt-6`}>
                    <Button htmlType={"button"} type="primary" onClick={login} size="medium">
                        Войти
                    </Button>
                </div>
                <div className={`pt-20 text text_type_main-default`}>
                    Вы — новый пользователь? <Link to={"/register"} className={styles.link}>Зарегистрироваться</Link>
                </div>
                <div className={`pt-4 text text_type_main-default`}>
                    Забыли пароль? <Link to={"/forgot-password"} className={styles.link}>Восстановить пароль</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;