import React from 'react';
import { useSubscription } from '@apollo/client';
import { useUserAddedSubscription } from '../../types';

export default function LatestUser() {
    const { data, error, loading } = useUserAddedSubscription();

    if (error) {
        return <div>Error</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <label>The user just added: </label>
            <br />
            <span className="userValue">{data?.userAdded?.name}</span>
            <span className="userValue">{data?.userAdded?.age}</span>
        </>
    );
}
