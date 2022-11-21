import React from "react";
import {Modal} from "../modal/modal";
import {useHistory, useParams} from "react-router-dom";
import {TOrder, useSelector} from "../../utils/types";
import {OrderInfo} from "./order-info";

function ModalOrderInfo(){

    let history = useHistory();
    const {id}: {id: string} = useParams();

    const {body: listOrders} = useSelector((state) => state.ws)
    const order = listOrders.find((x: TOrder) => x._id === id)

    let back = () => {
        history.goBack();
    };

    return (
        <>
            {order ? <Modal onClose={back}><OrderInfo order={order} /></Modal> : "" }
        </>
    )
}

export default ModalOrderInfo;