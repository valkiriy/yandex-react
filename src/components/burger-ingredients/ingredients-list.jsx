import React from "react";
import PropTypes from 'prop-types';
import {IngredientsItem} from "./ingredients-item";
import styles from './burger-ingredients.module.css'
import {ingredientType} from '../../utils/types'

export function IngredientsList({ items }){
    const list = items.map((item, index) => (<IngredientsItem key={item._id} item={item} />))
    return (
        <>
            <div className={styles.list}>
                {list}
            </div>
        </>
    )
}

IngredientsList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}