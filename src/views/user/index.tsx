import React from 'react';
import useAuth from '../../authContext/useAuth';
import ViewWrapper from '../../components/viewWrapper';

export default function Index() {
    const { user } = useAuth();
    return (
        <ViewWrapper name='User'>{user.email}</ViewWrapper>
    );
}
