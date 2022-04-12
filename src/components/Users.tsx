import React, { useState } from 'react';
import { NetworkStatus } from '@apollo/client';
import {
    useAddUserMutationMutation,
    useUsersQueryLazyQuery,
    AddUserMutationDocument,
    UsersQueryDocument,
} from '../types';

export function AddUser(): JSX.Element {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [addUser, { data: addUserData, loading: addUserLoading, error: addUserError }] = useAddUserMutationMutation({
        variables: { user: { name: 'Fangfang', age: 32 } },
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
                        {data?.users?.map((user) => (
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
            )}
            <button onClick={() => getUsers()}>getUsers</button>
        </div>
    );
}
