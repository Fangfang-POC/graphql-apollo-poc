import { ApolloError } from '@apollo/client';
import React from 'react';

type HOCProps = {
    error?: ApolloError;
    loading?: boolean;
    children?: React.ReactNode;
};

export default function ResultWrapper(props: HOCProps) {
    const { error, loading, children } = props;

    if (error) {
        console.log(error);
        return <div>{error?.networkError?.message ? error?.networkError?.message : 'Error'}</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return <>{children}</>;
}
