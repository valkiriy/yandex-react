import React from 'react';
import styles from "./profile.module.css";
import {NavLink} from "react-router-dom"

function ProfileMenu(){
    return (
        <menu className={styles.menu}>
            <ul>
                <li>
                    <NavLink to={{pathname: `/profile` }} exact className={styles.link} activeClassName={styles.active}>
                        <span>Профиль</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={{pathname: `/profile/orders` }} exact className={styles.link} activeClassName={styles.active}>
                        <span>История заказов</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={{pathname: `/profile/logout` }} exact className={styles.link} activeClassName={styles.active}>
                        <span>Выход</span>
                    </NavLink>
                </li>
                <li className={"pt-20 text_type_main-default text_color_inactive"}>В этом разделе вы можете
                    изменить свои персональные данные</li>
            </ul>
        </menu>
    )
}

export default ProfileMenu