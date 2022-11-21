import React, {ChangeEvent, useCallback, useState} from 'react';

import styles from "./register.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {useUser} from "../../services/user";


function Register(){
    const user = useUser();

    const history = useHistory();
    const [form, setValue] = useState({ name: '', email: '', password: '' });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const register = useCallback(
        e => {
            e.preventDefault();
            user && user.register(form).then(() => {
                history.replace('/')
            }).catch(() => {
                alert('error register');
            })
        },
        [user, form, history]
    );

    if (user?.user) {
        // @ts-ignore
        history.replace(history.location.state.r || '/')
    }

    return (
        <div className={`page-main-content`}>
            <div className={styles.content}>
                <form onSubmit={register}>
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
                        <Button htmlType={"submit"} type="primary" size="medium">
                            Зарегистрироваться
                        </Button>
                    </div>
                    <div className={`pt-20 text text_type_main-default`}>
                        Уже зарегистрированы? <Link to={"/login"} className={styles.link}>Войти</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;