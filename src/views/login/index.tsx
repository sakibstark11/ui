import { Box } from '@mui/system';
import React, { useState } from 'react';
import LoginForm from '../../components/login';
import { axiosPublic } from "../../helpers/axios";
import useAuth from "../../authContext/useAuth";

export default function Index() {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { setUser } = useAuth();
    const handleLogin = async (email: string, password: string) => {

        try {
            setLoading(true);
            setErrorMessage('');
            const { data: { accessToken } } = await axiosPublic.post('/login', { email, password });
            setUser({ email, accessToken });
            setLoading(false);
        }
        catch (error: any) {
            setLoading(false);
            setErrorMessage(error.response.data.message ?? 'something went wrong');
            setUser({ email: null, accessToken: null });
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
        }}>
            <LoginForm
                submitAction={handleLogin}
                errorMessage={errorMessage}
                loading={loading} />
        </Box>
    );
}
