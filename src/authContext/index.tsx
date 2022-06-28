import React, { createContext, useState, ReactNode } from 'react';
import { AuthContext } from './types';
const defaultState = { email: null, accessToken: null };

export const Context = createContext<AuthContext | null>(null);

interface ReactProp {
    children: ReactNode | ReactNode[];
}

export default function Index({ children }: ReactProp) {
    const [user, setUser] = useState(defaultState);
    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
}
