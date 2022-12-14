import React from 'react';
import {useParams} from "react-router-dom";
import {TOrder} from "../../utils/types";
import {OrderInfo} from "../../components/order-info/order-info";

import styles from "./profile.module.css";

interface IProfileOrder {
    listOrders: TOrder[]
}

function ProfileOrder({listOrders}: IProfileOrder){
    const {id}: {id: string} = useParams()
    const order = listOrders.find((x: TOrder) => x._id === id)
    return (
        <div className={styles.info_order}>
            { order && <OrderInfo order={order} /> }
        </div>
    )
}

export default ProfileOrder;