import React, { createContext } from 'react';
export const Context = createContext({});

const abc = "ss";



export default function index(props: any) {
    return (
        <Context.Provider value={abc}>
            {props.children}
        </Context.Provider>
    );
}
