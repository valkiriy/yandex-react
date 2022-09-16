import React from "react";
import PropTypes from 'prop-types';
import {IngredientsItem} from "./ingredients-item";
import styles from './burger-ingredients.module.css'
import {ingredientType} from '../../utils/types'
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {Modal} from "../modal/modal";

export function IngredientsList({ items }){

    const [showInfoItem, setShowInfoItem] = React.useState(null)

    function handleShowInfoItem(item){
        setShowInfoItem(item)
    }

    const list = items.map((item, index) => (<IngredientsItem key={item._id} item={item} handleShowInfoItem={handleShowInfoItem} />))
    return (
        <>
            <div className={styles.list}>
                {list}
            </div>
            {showInfoItem && (
                <Modal onClose={() => handleShowInfoItem(null) }>
                    <IngredientDetails ingredient={showInfoItem} />
                </Modal>
            )}
        </>
    )
}

IngredientsList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}