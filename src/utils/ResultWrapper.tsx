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
        return <div>Error</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return <>{children}</>;
}
