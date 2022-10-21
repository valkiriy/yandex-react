import React, {useEffect} from "react";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "./ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getIngredients} from "../../services/actions/ingridients";

function ModalIngredient(){

    let history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [])

    const {items} = useSelector(state => state.ingredients)
    const ingredient = items.find(x => x._id === id)

    let back = () => {
        history.goBack();
    };

    return (
        <>
            {ingredient ? <Modal onClose={back}><IngredientDetails ingredient={ingredient} /></Modal> : "" }
        </>
    )
}

export default ModalIngredient;