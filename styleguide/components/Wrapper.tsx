import React, { ReactElement } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000/subscriptions',
    // connectionParams: {
    //     authToken: '123',
    // }
}));
const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    // uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default function Wrapper({ children }: { children: ReactElement }) {
    return (<ApolloProvider client={client}>{children}</ApolloProvider>);
}