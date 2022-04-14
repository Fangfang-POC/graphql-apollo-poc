import React from 'react';
import { useSubscription } from '@apollo/client';
import { useUserAddedSubscription } from '../../types';
import handleErrorLoading from '../../utils/handleErrorLoading';

export default function LatestUser() {
    const { data, error, loading } = useUserAddedSubscription();
    const children = (
        <>
            <label>The user just added: </label>
            <br />
            <span className="userValue">{data?.userAdded?.name}</span>
            <span className="userValue">{data?.userAdded?.age}</span>
        </>
    );
    return handleErrorLoading({ loading, error, children });
}
