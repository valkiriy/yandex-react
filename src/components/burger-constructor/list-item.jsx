import React from "react";
import styles from './styles.module.css'

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export function ListItem({ item }){
    return (
        <div className={styles.item}>
            <Counter count={1} size="default" />
            <div>
                <img className={styles.item_image} src={item.image} alt={item.name}/>
                <p className={styles.item_price}><span>{item.price}</span> <CurrencyIcon type="primary" /></p>
            </div>
            <p className={styles.item_name}>{item.name}</p>
        </div>
    )
}

