import React from "react";
import styles from './burger-ingredients.module.css'

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {IngredientList} from "./ingredient-list";
import * as simpleList from "../../utils/simple.json";

export function BurgerIngredients(){

    return (
        <div className={styles.content}>
            <IngredientList items={simpleList.default} />
            <div className={styles.summary}>
                <span className="text text_type_digits-medium">
                    610 <CurrencyIcon type="large" />
                </span>
                <span>
                    <Button type="primary" size="large">
                      Оформить заказ
                    </Button>
                </span>
            </div>
        </div>
    )
}

