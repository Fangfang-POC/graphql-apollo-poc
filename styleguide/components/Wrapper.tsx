import React, { ReactElement } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition, offsetLimitPagination } from '@apollo/client/utilities';
import { UsersQueryResult, } from '../../src/types';

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

const InMemoryCacheConfig = {
    typePolicies: {
        Query: {
            fields: {
                users: {
                    // Don't cache separate results based on any of this field's arguments.
                    keyArgs: [], //['offset', 'limit'],
                    // Concatenate the incoming list items with the existing list items.
                    merge(existing: UsersQueryResult | undefined, incoming: UsersQueryResult) {
                        if(!existing) {
                            return incoming;
                        }
                        return {
                            totalCount: incoming?.totalCount,
                            userList: [...existing?.userList, ...incoming.userList],
                        };
                    },
                    read(existing: UsersQueryResult | undefined, { args: { offset, limit } }) {
                        // A read function should always return undefined if existing is
                        // undefined. Returning undefined signals that the field is
                        // missing from the cache, which instructs Apollo Client to
                        // fetch its value from your GraphQL server.

                        //re-pagination
                        // const { offset = 0, limit = existing?.userList.length } = args;                      
                        // return {
                        //     totalCount: existing?.totalCount,
                        //     userList: existing?.userList.slice(offset, offset + limit),
                        // };
                        //no-pagination, no need to define read function
                        return existing;
                    }
                },
            },
        },
    },
};
const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(InMemoryCacheConfig),
    connectToDevTools: true,
});

export default function Wrapper({ children }: { children: ReactElement }) {
    return (<ApolloProvider client={client}>{children}</ApolloProvider>);
}