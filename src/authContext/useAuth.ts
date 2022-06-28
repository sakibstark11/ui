import { useContext } from 'react';
import { Context } from '.';
import { AuthContext } from './types';

export default function useAuth() {
    return useContext(Context) as AuthContext;
};
