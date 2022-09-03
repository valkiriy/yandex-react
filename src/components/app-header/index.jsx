import React from "react";
import styles from './styles.module.css'

import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export function AppHeader(){
    return (
        <header className={styles.header}>
            <menu className={styles.menu}>
                <div className={`${styles.menuLeft} ${styles.menuItem}`}>
                    <a href="" className={`${styles.link} ${styles.active}`}>
                        <BurgerIcon type="primary" />
                        <span className="pl-2">Конструктор</span>
                    </a>
                    <a href="" className={styles.link}>
                        <ListIcon type="primary" />
                        <span className="pl-2">Лента заказов</span>
                    </a>
                </div>
                <a className={`${styles.menuItem}`}><Logo /></a>
                <div className={`${styles.menuRight} ${styles.menuItem}`}>
                    <a href="" className={styles.link}>
                        <ProfileIcon type="primary" />
                        <span className="pl-2">Личный кабинет</span>
                    </a>
                </div>
            </menu>
        </header>
    )
}

