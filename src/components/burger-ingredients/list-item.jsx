import React from "react";
import PropTypes from "prop-types";

import styles from './burger-ingredients.module.css'

import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const itemPropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
});

export function ListItem({ item, pos }){
    return (
        <div className={styles.item}>
            {pos === '' ? <DragIcon type="primary" /> : null }
            <ConstructorElement
                type={pos}
                isLocked={pos !== ''}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
            />
        </div>
    )
}


ListItem.propTypes = {
    item: itemPropType.isRequired,
    pos: PropTypes.string
}