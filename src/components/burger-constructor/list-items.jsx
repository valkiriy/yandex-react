import React from "react";
import {ListItem} from "./list-item";
import styles from './styles.module.css'

export function ListItems({ items }){
    const list = items.map(item => <ListItem key={item._id} item={item} />)
    return <div className={styles.list}>
        {list}
    </div>
}