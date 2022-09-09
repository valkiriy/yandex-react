import React from "react";

import {ConstructorList} from "./constructor-list";
import styles from './burger-constructor.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/types";

export function BurgerConstructor({ingredients}){
    const [current, setCurrent] = React.useState('bun')

    return (
        <div className={styles.content}>
            <h1 className={"pt-10 pb-5 text text_type_main-large"}>Соберите бургер</h1>
            <div className={styles.tab}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <ConstructorList items={ingredients.filter(x => x.type === current)} />
        </div>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired
}
