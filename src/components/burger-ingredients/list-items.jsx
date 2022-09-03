import React from "react";
import {ListItem} from "./list-item";
import styles from './styles.module.css'

export function ListItems({ items }){

    const list = items.map((item, index) => {
        let pos = null;
        if(index === 0) pos = 'top'
        if(index === items.length - 1) pos = 'bottom'
        return <ListItem key={item._id} item={item} pos={pos} />
    })

    return <div className={styles.list}>
        {list}
    </div>
}