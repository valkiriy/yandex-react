import React from "react";
import PropTypes from 'prop-types';
import {ConstructorItem} from "./constructor-item";
import styles from './burger-constructor.module.css'
import {ingredientType} from '../../utils/types'

export function ConstructorList({ items }){
    const list = items.map((item, index) => (<ConstructorItem key={item._id} item={item} />))
    return (
        <div className={styles.list}>
            {list}
        </div>
    )
}

ConstructorList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}