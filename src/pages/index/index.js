import React from 'react';

import {BurgerIngredients} from "../../components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../../components/burger-constructor/burger-constructor";
import {getIngredients} from "../../services/actions/ingridients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import styles from "./index.module.css";
import {useDispatch, useSelector} from "react-redux";

function Index(){

    const {items} = useSelector(state => state.ingredients)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients())
    }, [])

    return (
        <main className={`${styles.main} ${styles.container}`}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients ingredients={items} />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
}

export default Index;