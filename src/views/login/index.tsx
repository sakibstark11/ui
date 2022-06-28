import React, { useState } from 'react';
import LoginForm from '../../components/login';
import { axiosPublic } from "../../helpers/axios";
import useAuth from "../../authContext/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { LocationProps } from './types';
import ViewWrapper from "../../components/viewWrapper";

export default function Index() {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation() as LocationProps;
    const sourceLocation = location?.state?.from?.pathname ?? '/';

    const handleLogin = async (email: string, password: string) => {
        try {
            setLoading(true);
            setErrorMessage('');
            const { data: { accessToken } } = await axiosPublic.post('/login', { email, password });
            setUser({ email, accessToken });
            setLoading(false);
            navigate(sourceLocation, { replace: true });
        }
        catch (error: any) {
            setLoading(false);
            setErrorMessage(error.response.data.message ?? 'something went wrong');
            setUser({ email: null, accessToken: null });
        }
    };

    return (
        <ViewWrapper name='Login'>
            <LoginForm
                submitAction={handleLogin}
                errorMessage={errorMessage}
                loading={loading} />
        </ViewWrapper>
    );
}
