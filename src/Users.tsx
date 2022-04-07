import React, { useState } from 'react';
import { NetworkStatus, gql } from '@apollo/client';
import { useAddUserMutationMutation, useUsersQueryLazyQuery } from './types';

const UsersQuery = gql`
    query UsersQuery {
        users {
            name
            id
            age
        }
    }
`;
const AddUserMutation = gql`
    mutation AddUserMutation($user: AddUserInput) {
        addUser(input: $user) {
            name
            id
            age
        }
    }
`;

export function AddUser(): JSX.Element {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [addUser, { data: addUserData, loading: addUserLoading, error: addUserError }] = useAddUserMutationMutation({
        variables: { user: { name: 'Fangfang', age: 32 } },
        refetchQueries: [{ query: UsersQuery }],
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
                onClick={() =>
                    addUser({
                        variables: { user: { name, age } },
                    })
                }
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
    const [getUsers, { data, loading, error, networkStatus }] = useUsersQueryLazyQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
    });
    if (networkStatus === NetworkStatus.refetch) {
        return <div>Refetching</div>;
    }
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
                data?.users?.map((user) => (
                    <div key={user?.id}>
                        <span>{user?.id}</span>
                        <span>{user?.name}</span>
                        <span>{user?.age}</span>
                    </div>
                ))
            )}
            <button onClick={() => getUsers()}>getUsers</button>
        </div>
    );
}
