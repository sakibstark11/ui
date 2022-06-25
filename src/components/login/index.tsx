import { Alert, Button, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useRef } from 'react';

interface LoginActionProp {
    submitAction: Function;
    error: boolean;
    errorMessage: string;
    loading: boolean;
}

export default function index({ submitAction, error, errorMessage, loading }: LoginActionProp) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    return <Grid container spacing={2} direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <TextField inputRef={emailRef} label="Email" variant="outlined" error={error}
            />
        </Grid>
        <Grid item>
            <TextField inputRef={passwordRef} label="Password" variant="outlined" error={error} />
        </Grid>
        {
            error && <Grid item>
                <Alert severity="error">{errorMessage}</Alert>
            </Grid>
        }
        <Grid item>
            <LoadingButton loading={loading} variant="outlined" onClick={() => {
                emailRef.current
                    && emailRef.current.value
                    && passwordRef.current
                    && passwordRef.current.value
                    && submitAction(emailRef.current.value, passwordRef.current.value);
            }}>
                Login
            </LoadingButton>

        </Grid >
    </Grid >;

}
