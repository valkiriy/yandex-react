import React from "react";
import PropTypes from 'prop-types';
import {ListItem} from "./list-item";
import styles from './burger-constructor.module.css'
import {itemPropType} from './list-item'

export function ListItems({ items }){
    const list = items.map((item, index) => <ListItem key={item._id + index} item={item} />)
    return <div className={styles.list}>
        {list}
    </div>
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(itemPropType).isRequired
}