import { useUser } from '../services/user';
import { Redirect, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export function ProtectedRoute({ children, ...rest }) {
    let { loadUserInfo, ...user } = useUser();
    const [isUserLoaded, setUserLoaded] = useState(false);

    const init = () => {
        if(!user.user){
            loadUserInfo().finally(() => {
                setUserLoaded(true);
            });
        }else{
            setUserLoaded(true);
        }
    };

    useEffect(() => {
        init();
    }, []);

    if (!isUserLoaded) {
        return null;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { f: location }
                        }}
                    />
                )
            }
        />
    );
}