import { Box } from '@mui/system';
import React from 'react';
import LoginForm from '../../components/login';
import axios from "../../helpers/axios";

const handleLogin = async (email: string, password: string) => {
    try {
        const { data: { accessToken } } = await axios.post('/login', { email, password });
    }
    catch (error: any) {
        console.log(error.response.data);
    }
};

export default function index() {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh'
        }}>
            <LoginForm submitAction={handleLogin} />
        </Box>);
}
