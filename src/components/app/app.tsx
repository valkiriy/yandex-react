import React from 'react';
import styles from "./app.module.css"
import '@ya.praktikum/react-developer-burger-ui-components'

import {AppHeader} from "../app-header/app-header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";

function App() {
  return (
    <>
        <AppHeader />
        <main className={`${styles.main} ${styles.container}`}>
            <BurgerConstructor />
            <BurgerIngredients />
        </main>
    </>
  );
}

export default App;
