import React from "react";
import styles from './burger-constructor.module.css'

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {ConstructorList} from "./constructor-list";
import {Modal} from "../modal/modal";
import {OrderDetails} from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {HIDE_MODAL_INFO_ORDER, sendOrder} from "../../services/actions/order";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT, SET_BUN} from "../../services/actions/burger";

export function BurgerConstructor(){

    const {bun, ingredients} = useSelector(state => state.burger)

    const {show_info} = useSelector(state => state.order)

    const dispatch = useDispatch()
    const sendOrderHandler = () => {
        dispatch(sendOrder([bun, ...ingredients, bun]))
    }

    let [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item){
            if(item.type === 'bun'){
                dispatch({
                    type: SET_BUN,
                    ingredient: item
                })
            }else{
                dispatch({
                    type: ADD_INGREDIENT,
                    ingredient: item
                })
            }
        }
    })

    return (
        <>
            <div className={styles.content}  ref={dropTarget}>
                <ConstructorList items={ingredients} bun={bun} />
                <div className={styles.summary}>
                <span className="text text_type_digits-medium">
                    {ingredients.reduce((amount, item)=> {return amount + item.price }, 0) + (bun ? bun.price * 2 : 0)} <CurrencyIcon type="large" />
                </span>
                    <span>
                    <Button type="primary" onClick={() => sendOrderHandler()} size="large">
                      Оформить заказ
                    </Button>
                </span>
                </div>
            </div>
            {show_info && <Modal onClose={() => dispatch({type: HIDE_MODAL_INFO_ORDER}) }><OrderDetails /></Modal>}
        </>
    )
}

