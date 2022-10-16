import React from "react";
import PropTypes from 'prop-types';
import {IngredientsItem} from "./ingredients-item";
import styles from './burger-ingredients.module.css'
import {ingredientType} from '../../utils/types'
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {Modal} from "../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {HIDE_MODAL, SET_INGREDIENT, SHOW_MODAL} from "../../services/actions/view-ingridient";
import {useHistory} from "react-router-dom";

export function IngredientsList({ items }){

    const {showModal, ingredient} = useSelector(state => state.viewIngredient)
    const dispatch = useDispatch();

    function handleShowInfoItem(item){
        if(showModal){
            dispatch({
                type: HIDE_MODAL
            })
        }else{
            dispatch({
                type: SHOW_MODAL
            })
        }
        dispatch({
            type: SET_INGREDIENT,
            ingredient: item,
        })
    }

    const list = items.map((item, index) => (<IngredientsItem key={item._id} item={item} handleShowInfoItem={handleShowInfoItem} />))
    return (
        <>
            <div className={styles.list}>
                {list}
            </div>
            {showModal && (
                <Modal onClose={() => handleShowInfoItem(null) }>
                    <IngredientDetails ingredient={ingredient} />
                </Modal>
            )}
        </>
    )
}

IngredientsList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}