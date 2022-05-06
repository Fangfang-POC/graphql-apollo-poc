import React, { useEffect } from 'react';
import { useQuery, useLazyQuery, ServerError } from '@apollo/client';
import { useUserComponentQueryQuery, UserComponentQueryDocument } from '../../types';
import './style.scss';
import ResultWrapper from '../../utils/ResultWrapper';

function User(): JSX.Element {
    const { data, error, loading } = useUserComponentQueryQuery({ variables: { id: '1001' } });
    const { user } = data || {};
    const children = (
        <>
            <span className="userValue">{user?.age}</span>
            <span className="userValue">{user?.gender}</span>
            <span className="userValue">{user?.username}</span>
            <span className="userValue">{user?.name}</span>
        </>
    );
    return (
        <ResultWrapper error={error} loading={loading}>
            {children}
        </ResultWrapper>
    );
}
export default function Login() {
    const [showUserComponent, setShow] = React.useState(false);
    let hasAccess = false;
    useEffect(() => {
        async function checkStorageAccess() {
            if (document.hasStorageAccess) {
                hasAccess = await document.hasStorageAccess();
                console.log('hasAccess', hasAccess);
            }
        }
        checkStorageAccess();
    }, []);
    return (
        <>
            <button
                onClick={() => {
                    if (!hasAccess) {
                        if (document.requestStorageAccess) {
                            document
                                .requestStorageAccess()
                                .then(() => {
                                    console.log('storage access granted');
                                })
                                .catch((e) => {
                                    console.log('error', e);
                                });
                        }
                    }
                }}
            >
                Allow Request Storage Access
            </button>
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
