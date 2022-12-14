import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

import styles from "./login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory, useLocation} from "react-router-dom";
import {useUser} from "../../services/user";


function Login(){

    const user = useUser();
    const history = useHistory();
    const location = useLocation<{f: string | Location}>();

    const [form, setValue] = useState({ email: '', password: '' });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const login = useCallback(
        e => {
            e.preventDefault();
            if(user){
                user.login(form).then(() => {
                    history.replace(location.state.f ? location.state.f : '/')
                }).catch(() => {
                    alert('error login');
                })
            }
        },
        [form, user, history, location]
    );

    useEffect(() => {
        if (user && user.user) {
            history.replace('/')
        }
    }, [user])

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <form onSubmit={login}>
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
                        <Button htmlType={"submit"} type="primary" size="medium">
                            Войти
                        </Button>
                    </div>
                    <div className={`pt-20 text text_type_main-default`}>
                        Вы — новый пользователь? <Link to={"/register"} className={styles.link}>Зарегистрироваться</Link>
                    </div>
                    <div className={`pt-4 text text_type_main-default`}>
                        Забыли пароль? <Link to={"/forgot-password"} className={styles.link}>Восстановить пароль</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;