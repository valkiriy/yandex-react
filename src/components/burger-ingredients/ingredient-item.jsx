import React from "react";
import PropTypes from "prop-types";

import styles from './burger-ingredients.module.css'

import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/types";

export function IngredientItem({ item, pos }){
    let name = item.name;
    if(pos === 'top'){
        name += " (вверх)"
    }
    if(pos === 'bottom'){
        name += " (низ)"
    }
    return (
        <div className={styles.item}>
            {pos === '' ? <DragIcon type="primary" /> : null }
            <ConstructorElement
                type={pos}
                isLocked={pos !== ''}
                text={name}
                price={item.price}
                thumbnail={item.image}
            />
        </div>
    )
}


IngredientItem.propTypes = {
    item: ingredientType.isRequired,
    pos: PropTypes.string
}