import React from "react";
import {IngredientsItem} from "./ingredients-item";
import styles from './burger-ingredients.module.css'
import {TIngredient} from '../../utils/types'

interface IIngredientsList{
    items: TIngredient[]
}

export function IngredientsList({ items }: IIngredientsList){
    const list = items.map((item, index) => (<IngredientsItem key={item._id} item={item} />))
    return (
        <>
            <div className={styles.list}>
                {list}
            </div>
        </>
    )
}
