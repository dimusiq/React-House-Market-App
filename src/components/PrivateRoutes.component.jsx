import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus.hook';
import Spinner from './Spinner.component';

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()
    
    if (checkingStatus) {
        return <Spinner />
    }

    return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />

}

export default PrivateRoute;
