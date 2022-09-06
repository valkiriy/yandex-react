import React from "react";
import styles from './burger-constructor.module.css'

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/types";


export function ConstructorItem({ item }){
    return (
        <div className={styles.item}>
            <Counter count={1} size="default" />
            <div>
                <img className={styles.item_image} src={item.image} alt={item.name}/>
                <div className={styles.item_price}><span>{item.price}</span> <CurrencyIcon type="primary" /></div>
            </div>
            <p className={styles.item_name}>{item.name}</p>
        </div>
    )
}

ConstructorItem.propTypes = {
    item: ingredientType.isRequired
}