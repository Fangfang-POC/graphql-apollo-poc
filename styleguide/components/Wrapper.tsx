import React, { ReactElement } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '../../src/index.scss';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});


export default function Wrapper({ children }: {children: ReactElement}) {
    return (<ApolloProvider client={client}>{children}</ApolloProvider>);
}