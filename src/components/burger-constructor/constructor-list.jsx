import React from "react";
import {ConstructorItem} from "./constructor-item";
import styles from './burger-constructor.module.css'
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/types";

export function ConstructorList({ items }){

    const list = items.map((item, index) => {
        let pos = '';
        if(index === 0) pos = 'top'
        if(index === items.length - 1) pos = 'bottom'
        return (<ConstructorItem key={index + pos + item._id} item={item} pos={pos} />)
    })

    return (
        <div className={styles.list}>
            {list}
        </div>
    )
}

ConstructorList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}