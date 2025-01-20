import React, { ReactNode } from 'react'
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';


const PrivateRoutes = ({children}:{children:ReactNode}) => {
    const {checkSession} = useAuth();
    if(!checkSession()) return <Navigate to="/auth/login"/>
    return children
}

export default PrivateRoutes