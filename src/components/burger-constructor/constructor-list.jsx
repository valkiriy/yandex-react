import React from "react";
import PropTypes from 'prop-types';
import {ConstructorItem} from "./constructor-item";
import styles from './burger-constructor.module.css'
import {ingredientType} from '../../utils/types'
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {Modal} from "../modal/modal";

export function ConstructorList({ items }){

    const [showInfoItem, setShowInfoItem] = React.useState(null)

    function handleShowInfoItem(item){
        setShowInfoItem(item)
    }

    const list = items.map((item, index) => (<ConstructorItem key={item._id} item={item} handleShowInfoItem={handleShowInfoItem} />))
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

ConstructorList.propTypes = {
    items: PropTypes.arrayOf(ingredientType).isRequired
}