import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import App from './App';
import './index.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));
