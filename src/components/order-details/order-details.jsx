import React from "react";
import styles from './order-detail.module.css'

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {useSelector} from "react-redux";

export function OrderDetails() {

    const {number} = useSelector(state => state.order.info)

    return (
        <div className={styles.content}>
            <div className={styles.order_num}>{number}</div>
            <div className={styles.order_num_description}>идентификатор заказа</div>
            <div className={styles.order_status_icon}> <CheckMarkIcon type="primary" /></div>
            <div className={styles.order_status}>Ваш заказ начали готовить</div>
            <div className={styles.order_status_description}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}