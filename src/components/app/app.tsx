import React from 'react';
import styles from "./app.module.css"
import '@ya.praktikum/react-developer-burger-ui-components'

import {AppHeader} from "../app-header/app-header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";

const API_URL = `https://norma.nomoreparties.space/api/ingredients`;

function App() {

    const [ingredients, setIngredients] = React.useState([])

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setIngredients(data.data);
            }catch (e) {
                console.log(e)
            }
        }
        loadData();
    }, [])

    return (
        <>
            <AppHeader />
            <main className={`${styles.main} ${styles.container}`}>
                <BurgerConstructor ingredients={ingredients} />
                <BurgerIngredients />
            </main>
        </>
    );
}

export default App;
