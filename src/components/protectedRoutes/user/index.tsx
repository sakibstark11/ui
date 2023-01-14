import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../authContext/useAuth';

export default function Index() {
    const { user } = useAuth();
    const location = useLocation();
    return (
        user.email && user.accessToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
};
