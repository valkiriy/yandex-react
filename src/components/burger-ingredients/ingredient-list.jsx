import React from "react";
import {IngredientItem} from "./ingredient-item";
import styles from './burger-ingredients.module.css'
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/types";

export function IngredientList({ items }){

    const list = items.map((item, index) => {
        let pos = '';
        if(index === 0) pos = 'top'
        if(index === items.length - 1) pos = 'bottom'
        return (<IngredientItem key={index + pos + item._id} item={item} pos={pos} />)
    })

    return (
        <div className={styles.list}>
            {list}
        </div>
    )
}

IngredientList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}