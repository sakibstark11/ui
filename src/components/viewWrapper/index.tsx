import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { ReactProp } from '../shared/types';
import { viewWrapperProps } from './types';

export default function Index({ name, children }: viewWrapperProps & ReactProp) {
    return (
        <Container>
            <Box>
                <Typography variant='h2' sx={{ height: '10vh' }}>{name}</Typography>
                <Box sx={{
                    height: '90vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box >
                        {children}
                    </Box>
                </Box>
            </Box>
        </Container>

    );
}
