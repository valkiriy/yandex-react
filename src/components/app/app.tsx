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
                await fetch(API_URL)
                    .then(res => res.json())
                    .then(data => setIngredients(data.data))
                    .catch(err => console.log(err))
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
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor />
            </main>
        </>
    );
}

export default App;
