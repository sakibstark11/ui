import { Alert, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useRef } from 'react';

interface LoginActionProp {
    submitAction: Function;
    errorMessage: string;
    loading: boolean;
}

export default function Index({ submitAction, errorMessage, loading }: LoginActionProp) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        emailRef.current?.value
            && passwordRef.current?.value
            && submitAction(emailRef.current.value, passwordRef.current.value);
    };

    return <Grid
        container
        rowSpacing={2}
        direction="column">
        <Grid item>
            <TextField
                inputRef={emailRef}
                label="Email"
                variant="outlined"
                error={!!errorMessage}
            />
        </Grid>
        <Grid item>
            <TextField
                inputRef={passwordRef}
                label="Password"
                variant="outlined"
                error={!!errorMessage}
            />
        </Grid>
        {
            !!errorMessage && <Grid item>
                <Alert
                    severity="error">
                    {errorMessage}
                </Alert>
            </Grid>
        }
        <Grid item>
            <LoadingButton
                loading={loading}
                variant="outlined"
                onClick={handleSubmit}>
                Login
            </LoadingButton>

        </Grid >
    </Grid >;

}
