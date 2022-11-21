import React from 'react';
import styles from "./feed.module.css";
import {TOrder} from "../../utils/types";
import {useParams} from "react-router-dom";
import {OrderInfo} from "../../components/order-info/order-info";

interface IOrder {
    listOrders: TOrder[]
}

function Order({listOrders}: IOrder){
    const {id}: {id: string} = useParams()
    const order = listOrders.find((x: TOrder) => x._id === id)
    return (
        <div className={styles.info_order}>
            { order && <OrderInfo order={order} /> }
        </div>
    )
}

export default Order;