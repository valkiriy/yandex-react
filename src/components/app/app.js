import React from 'react';
import styles from "./app.module.css"
import '@ya.praktikum/react-developer-burger-ui-components'

import {AppHeader} from "../app-header/app-header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingridients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {

    const {items} = useSelector(state => state.ingredients)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getIngredients())
    }, [])

    return (
        <>
            <AppHeader />
            <main className={`${styles.main} ${styles.container}`}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients ingredients={items} />
                    <BurgerConstructor />
                </DndProvider>
            </main>
        </>
    );
}

export default App;
