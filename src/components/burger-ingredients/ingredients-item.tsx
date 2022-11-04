import React from "react";
import styles from './burger-ingredients.module.css'

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TIngredient} from "../../utils/types";
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";

interface IIngredientsItem {
    item: TIngredient
}

export function IngredientsItem({item} : IIngredientsItem){

    let location = useLocation();
    // @ts-ignore
    const {bun, ingredients} = useSelector(state => state.burger)

    const count = [bun, bun, ...ingredients]
        .filter(x => x)
        .filter(ingredient => ingredient._id === item._id).length

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: item
    })

    return (
        <div className={styles.item}
             ref={dragRef}>
            <Link
                to={{
                    pathname: `/ingredients/${item._id}`,
                    state: {
                        background: location,
                    }
                }}
                className={styles.link}
            >
                {count > 0 && (<Counter count={count} size="default" />) }
                <div>
                    <img className={styles.item_image} src={item.image} alt={item.name}/>
                    <div className={styles.item_price}><span>{item.price}</span> <CurrencyIcon type="primary" /></div>
                </div>
                <p className={styles.item_name}>{item.name}</p>
            </Link>
        </div>
    )
}
