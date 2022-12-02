import React from "react";
import styles from './app-header.module.css'

import {NavLink} from "react-router-dom"

import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export function AppHeader(){
    return (
        <header className={styles.header}>
            <menu className={styles.menu}>
                <div className={`${styles.menuLeft} ${styles.menuItem}`}>
                    <NavLink to={{pathname: `/` }} exact className={styles.link} activeClassName={styles.active}>
                        <BurgerIcon type="primary" />
                        <span className="pl-2">Конструктор</span>
                    </NavLink>
                    <NavLink to={{pathname: `/feed`}} className={styles.link} activeClassName={styles.active}>
                        <ListIcon type="primary" />
                        <span className="pl-2">Лента заказов</span>
                    </NavLink>
                </div>
                <NavLink to={{pathname: `/`}} className={`${styles.menuItem}`}><Logo /></NavLink>
                <div className={`${styles.menuRight} ${styles.menuItem}`}>
                    <NavLink data-class={"go-to-login"} to={{pathname: `/profile`}} className={styles.link} activeClassName={styles.active}>
                        <ProfileIcon type="primary" />
                        <span className="pl-2">Личный кабинет</span>
                    </NavLink>
                </div>
            </menu>
        </header>
    )
}

