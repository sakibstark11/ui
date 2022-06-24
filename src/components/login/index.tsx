import { Button, Grid, TextField } from '@mui/material';
import React, { useRef } from 'react';

interface LoginActionProp {
    submitAction: Function;
}

export default function index({ submitAction }: LoginActionProp) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    return <Grid container spacing={2} direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <TextField inputRef={emailRef} label="Email" variant="outlined" />
        </Grid>
        <Grid item>
            <TextField inputRef={passwordRef} label="Password" variant="outlined" />
        </Grid>
        <Grid item>
            <Button variant="outlined"
                onClick={() => {
                    emailRef.current
                        && emailRef.current.value
                        && passwordRef.current
                        && passwordRef.current.value
                        && submitAction(emailRef.current.value, passwordRef.current.value);
                }}>Login</Button>
        </Grid>
    </Grid>;

}
