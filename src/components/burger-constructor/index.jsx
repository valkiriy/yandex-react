import React from "react";

import {ListItems} from "./list-items";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import * as listIngredients from "../../utils/data.json";

export function BurgerConstructor(){
    const [current, setCurrent] = React.useState('bun')

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className={"pt-10 pb-5 text text_type_main-large"}>Соберите бургер</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"mb-10"}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <ListItems items={listIngredients.default.filter(x => x.type === current)} />
        </div>
    )
}

