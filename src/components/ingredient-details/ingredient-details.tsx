import React from "react";
import styles from './ingredient-details.module.css'
import {TIngredient} from "../../utils/types";

interface IIngredientDetails {
    ingredient: TIngredient
}

export function IngredientDetails({ingredient}: IIngredientDetails) {

    return (
        <div className={styles.content}>
            <div className={styles.header}>Детали ингредиента</div>
            <div className={styles.image}>
                <img src={ingredient.image_large} alt={ingredient.name}/>
            </div>
            <p className={styles.name}>{ingredient.name}</p>
            <div className={styles.grid}>
                <div className={styles.grid_item}>
                    <span>Калории,ккал</span>
                    <div className={styles.grid_item_value}>{ingredient.calories}</div>
                </div>
                <div className={styles.grid_item}>
                    <span>Белки, г</span>
                    <div className={styles.grid_item_value}>{ingredient.proteins}</div>
                </div>
                <div className={styles.grid_item}>
                    <span>Жиры, г</span>
                    <div className={styles.grid_item_value}>{ingredient.fat}</div>
                </div>
                <div className={styles.grid_item}>
                    <span>Углеводы, г</span>
                    <div className={styles.grid_item_value}>{ingredient.carbohydrates}</div>
                </div>
            </div>
        </div>
    )
}
