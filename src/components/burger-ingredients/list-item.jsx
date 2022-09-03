import React from "react";
import styles from './styles.module.css'

import {ConstructorElement, Counter, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export function ListItem({ item, pos }){
    return (
        <div className={styles.item}>
            {pos === null ? <DragIcon type="primary" /> : null }
            <ConstructorElement
                type={pos}
                isLocked={pos !== null}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
            />
        </div>
    )
}

