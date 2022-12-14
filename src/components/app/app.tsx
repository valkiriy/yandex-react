import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components'
import {Route, Switch, useLocation} from 'react-router-dom';


import {ProvideUser} from '../../services/user'

import {AppHeader} from "../app-header/app-header";
import IndexPage from "../../pages/index/index"
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password"
import IngredientsPage from "../../pages/ingredients/ingredients"
import LoginPage from "../../pages/login/login"
import ProfileIndex from "../../pages/profile/index"
import RegisterPage from "../../pages/register/register"
import ResetPasswordPage from "../../pages/reset-password/reset-password"

import FeedPage from "../../pages/feed/index"

import {ProtectedRoute} from "../protected-route";
import ModalIngredient from "../ingredient-details/modal";
import {getIngredients} from "../../services/actions/ingridients";
import {useDispatch} from "../../utils/types";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients())
    }, [])

    const location = useLocation<{ background: boolean}>();
    const background = (location.state as any)?.background;

    return (
        <ProvideUser>
            <AppHeader />
            <Switch location={background || location}>
                <Route path="/register" exact={true}>
                    <RegisterPage />
                </Route>
                <Route path="/feed">
                    <FeedPage />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginPage />
                </Route>
                <Route path="/forgot-password" exact={true}>
                    <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password" exact={true}>
                    <ResetPasswordPage />
                </Route>
                <ProtectedRoute path="/profile">
                    <ProfileIndex />
                </ProtectedRoute>
                <Route path="/ingredients/:id" exact={true}>
                    <IngredientsPage />
                </Route>
                <Route path="/" exact={true}>
                    <IndexPage />
                </Route>
            </Switch>

            {background && <Route path="/ingredients/:id" children={<ModalIngredient />} />}
        </ProvideUser>
    );
}

export default App;
