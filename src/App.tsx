import React from 'react';
import "./App.css"
import '@ya.praktikum/react-developer-burger-ui-components'

import {AppHeader} from "./components/app-header";
import {BurgerIngredients} from "./components/burger-ingredients";
import {BurgerConstructor} from "./components/burger-constructor";

function App() {
  return (
    <>
        <AppHeader />
        <main className={'main container'}>
            <BurgerConstructor />
            <BurgerIngredients />
        </main>
    </>
  );
}

export default App;
