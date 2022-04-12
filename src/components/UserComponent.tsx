import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useUserComponentQueryQuery, UserComponentQueryDocument } from '../types';

export default function User(): JSX.Element {
    const { data, error, loading } = useUserComponentQueryQuery({ variables: { id: '1001' } });
    // const { data, error, loading } = useQuery(UserComponentQueryDocument, {variables: {id: '1001'}});
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    if (!data) {
        return <div>no data</div>;
    }
    const { user } = data;
    return (
        <>
            <span>{user?.age}</span>
            <span>{user?.gender}</span>
            <span>{user?.username}</span>
            <span>{user?.name}</span>
        </>
    );
}