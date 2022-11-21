import React from "react";

import {OrderStatus, TOrder, useSelector} from "../../utils/types";
import styles from "./order-info.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

interface IOrderInfo {
    order: TOrder
}

export function OrderInfo({order}: IOrderInfo) {

    const {items: ingredients} = useSelector((state) => state.ingredients)

    const created_at = new Date(order.createdAt)

    const amount = order.ingredients.reduce((accumulator, currentValue) => {
        const item = ingredients.find(x => x._id === currentValue)
        return item ? accumulator + item.price : accumulator
    }, 0);

    return (
        <div className={"p-10"}>
            <div className="text text_type_digits-default mb-10">#{order.number}</div>
            <div className="text text_type_main-medium mb-3">{order.name}</div>
            <div className="text text_type_main-default mb-15">
                {OrderStatus.CREATED === order.status ? "Создан" : null}
                {OrderStatus.PENDING === order.status ? "Отменен" : null}
                {OrderStatus.DONE === order.status ? "Выполнен" : null}
            </div>
            <div className="text text_type_main-medium mb-6">Состав:</div>
            <div  className={`text text_type_main-default ${styles.list_items}`}>
                {order.ingredients.map((y, index) => {
                    const item = ingredients.find(x => x._id === y)
                    return item && (
                        <div key={item._id + index} className={styles.item}>
                            <div className={styles.item_info}>
                                <div>
                                    <div className={styles.img_preview} style={{backgroundImage: `url(${item.image_large})`}}>&nbsp;</div>
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </div>
                            <div>
                                {item.price} &nbsp;<CurrencyIcon type="primary" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`text text_type_main-small mt-10 ${styles.footer}`}>
                <div>{created_at.toLocaleString()}</div>
                <div>{amount} &nbsp;<CurrencyIcon type="primary" /></div>
            </div>
        </div>
    )
}