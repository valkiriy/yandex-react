import React from "react";
import styles from './burger-constructor.module.css'

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {ConstructorList} from "./constructor-list";
import {Modal} from "../modal/modal";
import {OrderDetails} from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {HIDE_MODAL_INFO_ORDER, sendOrder} from "../../services/actions/order";
import {useDrop} from "react-dnd";
import {AddIngredientBurger, SET_BUN} from "../../services/actions/burger";
import {useUser} from "../../services/user";
import {useHistory} from "react-router-dom";
import {TIngredient, TypeIngredient} from "../../utils/types";

export function BurgerConstructor(){

    let user = useUser();
    const history = useHistory();

    const {bun, ingredients} = useSelector(
        //@ts-ignore
        (state) => state.burger
    )

    const {show_info} = useSelector(
        // в слаке сказали пока сделать так
        //@ts-ignore
        (state) => state.order
    )

    const dispatch = useDispatch()
    const sendOrderHandler = () => {
        if(user && user.user){
            dispatch(sendOrder([bun, ...ingredients, bun]))
        }else{
            history.replace('/login', {r: '/'})
        }
    }

    let [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item:TIngredient){
            if(item.type === TypeIngredient.BUN){
                dispatch({
                    type: SET_BUN,
                    ingredient: item
                })
            }else{
                dispatch(AddIngredientBurger(item))
            }
        }
    })

    return (
        <>
            <div className={styles.content}  ref={dropTarget}>
                <ConstructorList items={ingredients} bun={bun} />
                <div className={styles.summary}>
                <span className="text text_type_digits-medium">
                    {ingredients.reduce((amount: number, item: TIngredient)=> {return amount + item.price }, 0) + (bun ? bun.price * 2 : 0)} <CurrencyIcon type={"primary"} />
                </span>
                    <span>
                    <Button htmlType={"button"} type="primary" onClick={() => sendOrderHandler()} size="large">
                      Оформить заказ
                    </Button>
                </span>
                </div>
            </div>
            {show_info && <Modal onClose={() => dispatch({type: HIDE_MODAL_INFO_ORDER}) }><OrderDetails /></Modal>}
        </>
    )
}

