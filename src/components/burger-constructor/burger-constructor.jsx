import React from "react";
import styles from './burger-constructor.module.css'

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {ConstructorList} from "./constructor-list";
import * as simpleList from "../../utils/simple.json";
import {Modal} from "../modal/modal";
import {OrderDetails} from "../order-details/order-details";

export function BurgerConstructor(){

    const [showOrderInfo, setShowOrderInfo] = React.useState(false)

    return (
        <>
            <div className={styles.content}>
                <ConstructorList items={simpleList.default} />
                <div className={styles.summary}>
                <span className="text text_type_digits-medium">
                    610 <CurrencyIcon type="large" />
                </span>
                    <span>
                    <Button type="primary" onClick={() => setShowOrderInfo(true)} size="large">
                      Оформить заказ
                    </Button>
                </span>
                </div>
            </div>
            {showOrderInfo && <Modal onClose={() => setShowOrderInfo(false) }><OrderDetails /></Modal>}
        </>
    )
}

