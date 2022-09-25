import React from "react";
import PropTypes from "prop-types";

import styles from './burger-constructor.module.css'


import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/types";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT} from "../../services/actions/burger";

export function ConstructorItem({pos, item, index}){

    const dispatch = useDispatch()

    let name = item.name;
    if(item.type === 'bun'){
        name += pos === 'top' ? " (вверх)" : pos === 'bottom' ? " (низ)" : '';
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
                handleClose={() => dispatch({type: REMOVE_INGREDIENT, index: index})}
            />
        </div>
    )
}


ConstructorItem.propTypes = {
    item: ingredientType.isRequired,
    pos: PropTypes.string,
    index: PropTypes.number
}