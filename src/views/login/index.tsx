import { Box } from '@mui/system';
import React from 'react';
import LoginForm from '../../components/login';
import axios from "../../helpers/axios";

const handleLogin = async (email: string, password: string) => {
    console.log("email", email, "password", password);
    const { data, status } = await axios.post('/login', { email, password });
    console.log(data, status);
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
