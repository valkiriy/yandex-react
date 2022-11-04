import React from "react";
import {ConstructorItem} from "./constructor-item";
import styles from './burger-constructor.module.css'
import {TIngredient} from "../../utils/types";

interface IConstructorList {
    items: TIngredient[],
    bun: TIngredient
}

export function ConstructorList({items, bun}: IConstructorList){

    return (
        <div className={styles.list}>
            {bun && <ConstructorItem key={0 + bun._id} pos={"top"} item={bun} index={0} />}
            {!bun && (
                <div className={styles.empty_ingredient_wrap}>
                    <div className={styles.empty_ingredient_top}>Выберите булку</div>
                </div>
            )}
            <div className={styles.list_ingredients}>
                {items.length === 0 && (
                    <div className={styles.empty_ingredient_wrap}>
                        <div className={styles.empty_ingredient_list}>
                            Выберите ингредиенты
                        </div>
                    </div>
                )}
                {items.map((item, index) => (<ConstructorItem pos={undefined} key={item.uuid} item={item} index={index} />) )}
            </div>
            {bun && <ConstructorItem key={999 + bun._id} pos={"bottom"} item={bun} index={999} />}
            {!bun && (
                <div className={styles.empty_ingredient_wrap}>
                    <div className={styles.empty_ingredient_bottom}>Выберите булку</div>
                </div>
            )}
        </div>
    )
}
