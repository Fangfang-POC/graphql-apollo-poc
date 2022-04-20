import React, { useState } from 'react';
import { NetworkStatus, useQuery } from '@apollo/client';
import {
    useAddUserMutationMutation,
    useUsersQueryLazyQuery,
    AddUserMutationDocument,
    UsersQueryDocument,
} from '../../types';
import ResultWrapper from '../../utils/ResultWrapper';
import './style.scss';

export function AddUser(): JSX.Element {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [addUser, { data: addUserData, loading: addUserLoading, error: addUserError }] = useAddUserMutationMutation({
        // variables: { user: { name: 'Fangfang', age: 32 } },
        refetchQueries: [{ query: UsersQueryDocument }],
    });
    return (
        <div>
            <label>User Name: </label>
            <input value={name} onChange={(evt) => setName(evt.target.value)} />
            <br />
            <br />
            <label>User Age: </label>
            <input type="number" value={age} onChange={(evt) => setAge(parseInt(evt.target.value))} />
            <br />
            <br />
            <button
                onClick={() => {
                    if (!name || !age) {
                        alert('invalid input');
                        return;
                    }
                    addUser({
                        variables: { user: { name, age } },
                    });
                    setName('');
                    setAge(0);
                }}
            >
                addUser
            </button>
            {addUserLoading ? (
                <div>Loading...</div>
            ) : addUserError ? (
                <div>Error</div>
            ) : (
                <div>The added user name: {addUserData?.addUser?.name}</div>
            )}
        </div>
    );
}
export function GetUsers(): JSX.Element {
    const [getUsers, { data, loading, error, networkStatus, fetchMore }] = useUsersQueryLazyQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: { offset: 0, limit: 2 },
    });
    const { users } = data || {};
    const { totalCount, userList } = users || {};
    if (networkStatus === NetworkStatus.refetch) {
        return <div>Refetching</div>;
    }
    const children = (
        <>
            <div>Total count: {totalCount}</div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {userList?.map((user) => (
                        <tr key={user?.id}>
                            <td>{user?.id}</td>
                            <td>{user?.name}</td>
                            <td>{user?.age}</td>
                            <td>{user?.gender}</td>
                            <td>{user?.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
    return (
        <>
            <button onClick={() => getUsers()}>Get First 2 users</button>
            <button
                onClick={() => {
                    fetchMore({
                        variables: { offset: userList?.length || 0 },
                        // updateQuery: (prev, { fetchMoreResult }) => {
                        //     if (!fetchMoreResult) {
                        //         return prev;
                        //     }
                        //     return {
                        //         ...prev,
                        //         users: {
                        //             ...prev.users,
                        //             userList: [...prev.users?.userList || [], ...fetchMoreResult?.users?.userList || []],
                        //         },
                        //     };
                        // },
                    });
                }}
            >
                Get the rest users
            </button>
            <ResultWrapper loading={loading} error={error} children={children} />
        </>
    );
}
