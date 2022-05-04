import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useUserComponentQueryQuery, UserComponentQueryDocument } from '../../types';
import './style.scss';

function User(): JSX.Element {
    const { data, error, loading } = useUserComponentQueryQuery({ variables: { id: '1001' } });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.log(error);
        return <div>Error</div>;
    }
    if (!data) {
        return <div>no data</div>;
    }
    const { user } = data;
    return (
        <>
            <span className="userValue">{user?.age}</span>
            <span className="userValue">{user?.gender}</span>
            <span className="userValue">{user?.username}</span>
            <span className="userValue">{user?.name}</span>
        </>
    );
}
export function Login() {
    const [showUserComponent, setShow] = React.useState(false);
    return (
        <>
            <button
                onClick={async () => {
                    const res = await authenticate();
                    if (res && res.success) {
                        alert('login success');
                    } else {
                        alert('login failed');
                    }
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    setShow(true);
                }}
            >
                Get User Information
            </button>
            {showUserComponent && <User />}
        </>
    );
}

async function authenticate() {
    try {
        const res = await fetch('https://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Don't forget to specify this if you need cookies
            body: JSON.stringify({
                username: 'admin',
                password: 'admin',
            }),
        });
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
