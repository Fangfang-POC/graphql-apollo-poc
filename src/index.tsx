import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GetUsers, AddUser } from './components/Users';
import UserComponent from './components/UserComponent';
import './index.scss';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        {/* <GetUsers />
        <AddUser /> */}
        <UserComponent />
    </ApolloProvider>,
    document.getElementById('root'),
);
