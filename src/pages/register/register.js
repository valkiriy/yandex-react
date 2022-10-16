import React, {useCallback, useState} from 'react';

import styles from "./register.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {useUser} from "../../services/user";


function Register(){
    let user = useUser();

    const history = useHistory();
    const [form, setValue] = useState({ name: '', email: '', password: '' });
    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    let register = useCallback(
        e => {
            user.register(form).then(() => {
                history.replace('/')
            }).catch(() => {
                alert('error register');
            })
        },
        [user, form, history]
    );

    if (user.user) {
        history.replace(history.location.state.r || '/')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <div className={styles.title}>Регистрация</div>
                <div className={`pt-6 ${styles.field}`}>
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
                <div className={`pt-6`}>
                    <Button htmlType={"button"} type="primary" onClick={register} size="medium">
                        Зарегистрироваться
                    </Button>
                </div>
                <div className={`pt-20 text text_type_main-default`}>
                    Уже зарегистрированы? <Link to={"/login"} className={styles.link}>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;