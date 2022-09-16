import React from "react";
import styles from './burger-ingredients.module.css'

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/types";
import PropTypes from "prop-types";


export function IngredientsItem({ item, handleShowInfoItem }){
    return (
        <div className={styles.item} onClick={() => handleShowInfoItem(item)}>
            <Counter count={1} size="default" />
            <div>
                <img className={styles.item_image} src={item.image} alt={item.name}/>
                <div className={styles.item_price}><span>{item.price}</span> <CurrencyIcon type="primary" /></div>
            </div>
            <p className={styles.item_name}>{item.name}</p>
        </div>
    )
}

IngredientsItem.propTypes = {
    item: ingredientType.isRequired,
    handleShowInfoItem: PropTypes.func.isRequired,
}