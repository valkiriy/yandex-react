import React from "react";
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css'

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const itemPropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
});

export function ListItem({ item }){
    return (
        <div className={styles.item}>
            <Counter count={1} size="default" />
            <div>
                <img className={styles.item_image} src={item.image} alt={item.name}/>
                <div className={styles.item_price}><span>{item.price}</span> <CurrencyIcon type="primary" /></div>
            </div>
            <p className={styles.item_name}>{item.name}</p>
        </div>
    )
}

ListItem.propTypes = {
    item: itemPropType.isRequired
}