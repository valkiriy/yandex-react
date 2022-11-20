import {OrderStatus, TOrder, useSelector} from "../../utils/types";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

import styles from './order-small.module.css';

interface IOrderSmall {
    order: TOrder,
    showStatus?: boolean
}

export function OrderSmall({order, showStatus = false}: IOrderSmall) {

    const {items: ingredients} = useSelector((state) => state.ingredients)

    const created_at = new Date(order.createdAt)

    const amount = order.ingredients.reduce((accumulator, currentValue) => {
        const item = ingredients.find(x => x._id === currentValue)
        return item ? accumulator + item.price : accumulator
    }, 0);

    return (
        <div className={styles.item}>
            <div className={`text text_type_main-default ${styles.info}`}>
                <div>#{order.number}</div>
                <div className={styles.right}>{created_at.toLocaleString()}</div>
            </div>
            <div className="text text_type_main-medium">
                {order.name}
            </div>
            {showStatus && (
                <div className="text text_type_main-small">
                    {OrderStatus.CREATED === order.status ? "Создан" : null}
                    {OrderStatus.PENDING === order.status ? "Отменен" : null}
                    {OrderStatus.DONE === order.status ? "Выполнен" : null}
                </div>
            )}
            <div className={styles.info}>
                <div className={styles.list_ingr}>
                    {order.ingredients.slice(0, 5).map((y, index) => {
                        const item = ingredients.find(x => x._id === y)
                        return item && (
                            <div key={item._id + index} className={styles.img_preview} style={{backgroundImage: `url(${item.image_large})`}}>&nbsp;</div>
                        )
                    })}
                </div>
                <div className={` ${styles.info_price}`}>
                    <span className={'text text text_type_digits-default'}>{amount}</span>&nbsp;<CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}