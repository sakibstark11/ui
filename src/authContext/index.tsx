import React, { createContext, useState } from 'react';
import { ReactProp } from '../components/shared/types';
import { AuthContext } from './types';
const defaultState = { email: null, accessToken: null };

export const Context = createContext<AuthContext | null>(null);



export default function Index({ children }: ReactProp) {
    const [user, setUser] = useState(defaultState);
    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
}
