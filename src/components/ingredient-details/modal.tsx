import React, {useEffect} from "react";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "./ingredient-details";
import {useHistory, useParams} from "react-router-dom";
import {getIngredients} from "../../services/actions/ingridients";
import {TIngredient, useDispatch, useSelector} from "../../utils/types";

function ModalIngredient(){

    let history = useHistory();
    const {id}: {id: string} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [])

    const {items} = useSelector(
        (state) => state.ingredients
    )

    const ingredient = items.find((x: TIngredient) => x._id === id)

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