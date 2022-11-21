import React, {useEffect} from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {ProtectedRoute} from "../../components/protected-route";

import styles from "./profile.module.css";

import ProfileMenu from "./menu"
import ProfilePage from "./profile"
import ProfileOrdersPage from "./orders"
import ProfileLogoutPage from "./logout"

function ProfileIndex() {

    return (
        <main className={`${styles.main} ${styles.container}`}>
            <div className={styles.menu}>
                <ProfileMenu />
            </div>
            <div className={styles.content}>
                <Switch>
                    <ProtectedRoute path="/profile" exact={true}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile/orders">
                        <ProfileOrdersPage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile/logout" exact={true}>
                        <ProfileLogoutPage />
                    </ProtectedRoute>
                </Switch>
            </div>
        </main>
    )

}

export default  ProfileIndex