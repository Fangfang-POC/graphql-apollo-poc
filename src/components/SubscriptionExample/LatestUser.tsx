import React from 'react';
import { useSubscription } from '@apollo/client';
import { useUserAddedSubscription } from '../../types';
import ResultWrapper from '../../utils/ResultWrapper';

export default function LatestUser(): React.ReactElement {
    const { data, error, loading } = useUserAddedSubscription();
    const children = (
        <>
            <label>The user just added: </label>
            <br />
            <span className="userValue">{data?.userAdded?.name}</span>
            <span className="userValue">{data?.userAdded?.age}</span>
        </>
    );
    return ResultWrapper({ loading, error, children });
}
