import React, {useEffect, useRef} from "react";

import {IngredientsList} from "./ingredients-list";
import styles from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/types";

export function BurgerIngredients({ingredients}){
    const [current, setCurrent] = React.useState('bun')
    const listBunRef = useRef();
    const listSauceRef = useRef();
    const listMainRef = useRef();

    const scrollHandler = _ => {
        if(listBunRef.current.getBoundingClientRect().y > 0){
            setCurrent('bun')
        }else if(listSauceRef.current.getBoundingClientRect().y > 0){
            setCurrent('sauce')
        }else{
            setCurrent('main')
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

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

            <div className={styles.list_wrap}>
                <div>
                    <p className="text text_type_main-medium pb-6" ref={listBunRef}>
                        Булки
                    </p>
                    <IngredientsList items={ingredients.filter(x => x.type === 'bun')} />
                </div>
                <div>
                    <p className="text text_type_main-medium  pt-10 pb-6" ref={listSauceRef}>
                        Соусы
                    </p>
                    <IngredientsList items={ingredients.filter(x => x.type === 'sauce')} />
                </div>
                <div>
                    <p className="text text_type_main-medium  pt-10 pb-6" ref={listMainRef}>
                        Начинки
                    </p>
                    <IngredientsList items={ingredients.filter(x => x.type === 'main')} />
                </div>
            </div>

        </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired
}
