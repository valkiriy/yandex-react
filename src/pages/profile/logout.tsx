import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {useUser} from "../../services/user";


function ProfileLogout(){
    const user = useUser()

    useEffect(() => {
        user && user.logout()
    }, [])

    return (
        <Redirect to="/" />
    )
}

export default ProfileLogout;