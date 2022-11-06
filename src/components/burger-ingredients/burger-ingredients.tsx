import React, {useEffect, useRef} from "react";

import {IngredientsList} from "./ingredients-list";
import styles from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import {useSelector} from "react-redux";
import {TIngredient, TypeIngredient} from "../../utils/types";

export function BurgerIngredients(){
    const {items: ingredients} = useSelector(
        // @ts-ignore
        (state) => state.ingredients
    )

    const [current, setCurrent] = React.useState('bun')
    const listBunRef = useRef<HTMLInputElement>(null);
    const listSauceRef = useRef<HTMLInputElement>(null);
    const listMainRef = useRef<HTMLInputElement>(null);

    const scrollHandler = () => {
        if(listBunRef.current && listBunRef.current.getBoundingClientRect().y > 0){
            setCurrent('bun')
        }else if(listSauceRef.current && listSauceRef.current.getBoundingClientRect().y > 0){
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
                    <IngredientsList items={ingredients.filter((x: TIngredient) => x.type === TypeIngredient.BUN)} />
                </div>
                <div>
                    <p className="text text_type_main-medium  pt-10 pb-6" ref={listSauceRef}>
                        Соусы
                    </p>
                    <IngredientsList items={ingredients.filter((x: TIngredient) => x.type === TypeIngredient.SAUCE)} />
                </div>
                <div>
                    <p className="text text_type_main-medium  pt-10 pb-6" ref={listMainRef}>
                        Начинки
                    </p>
                    <IngredientsList items={ingredients.filter((x: TIngredient) => x.type === TypeIngredient.MAIN)} />
                </div>
            </div>

        </div>
    )
}
