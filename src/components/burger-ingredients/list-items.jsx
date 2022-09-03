import React from "react";
import {ListItem} from "./list-item";
import styles from './burger-ingredients.module.css'
import {itemPropType} from './list-item'
import PropTypes from "prop-types";

export function ListItems({ items }){

    const list = items.map((item, index) => {
        let pos = '';
        if(index === 0) pos = 'top'
        if(index === items.length - 1) pos = 'bottom'
        return <ListItem key={index + pos + item._id} item={item} pos={pos} />
    })

    return <div className={styles.list}>
        {list}
    </div>
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(itemPropType).isRequired
}