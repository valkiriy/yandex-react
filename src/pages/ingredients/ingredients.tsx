import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";

import styles from "./ingredients.module.css";
import {TIngredient, useSelector} from "../../utils/types";


function Ingredients(){

    const {items} = useSelector(
        (state) => state.ingredients
    )

    const {id}: {id: string} = useParams()

    const ingredient = items.find((x: TIngredient) => x._id === id)

    return ( <div className={styles.center}>{ingredient ? <IngredientDetails ingredient={ingredient} /> : "Загружаю данные" }</div> )
}

export default Ingredients;