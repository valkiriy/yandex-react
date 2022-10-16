import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingridients";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";

import styles from "./ingredients.module.css";


function Ingredients(){

    const {items} = useSelector(state => state.ingredients)
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [])

    const ingredient = items.find(x => x._id === id)

    return ( <div className={styles.center}>{ingredient ? <IngredientDetails ingredient={ingredient} /> : "Загружаю данные" }</div> )
}

export default Ingredients;