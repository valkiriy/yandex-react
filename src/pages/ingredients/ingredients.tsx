import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingridients";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";

import styles from "./ingredients.module.css";
import {TIngredient} from "../../utils/types";


function Ingredients(){

    //@ts-ignore
    const {items} = useSelector(state => state.ingredients)

    const {id}: {id: string} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [])

    const ingredient = items.find((x: TIngredient) => x._id === id)

    return ( <div className={styles.center}>{ingredient ? <IngredientDetails ingredient={ingredient} /> : "Загружаю данные" }</div> )
}

export default Ingredients;