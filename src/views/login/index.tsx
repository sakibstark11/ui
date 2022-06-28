import { Box } from '@mui/system';
import React, { useState, useContext } from 'react';
import LoginForm from '../../components/login';
import { axiosPublic } from "../../helpers/axios";
import { Context } from '../../userContext';

export default function Index() {
    const userContext = useContext(Context);

    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleLogin = async (email: string, password: string) => {

        try {
            setLoading(true);
            setError(false);
            setErrorMessage('');
            const { data: { accessToken } } = await axiosPublic.post('/login', { email, password });
            setLoading(false);
        }
        catch (error: any) {
            setError(true);
            setErrorMessage(error.response.data.message ?? 'something went wrong');
            setLoading(false);
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
        }}>
            <LoginForm
                submitAction={handleLogin}
                error={error}
                errorMessage={errorMessage}
                loading={loading} />
        </Box>
    );
}
