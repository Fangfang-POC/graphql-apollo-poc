import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddUserInput = {
  age?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Airplane = Vehicle & {
  __typename?: 'Airplane';
  maxSpeed?: Maybe<Scalars['Int']>;
  wingspan?: Maybe<Scalars['Int']>;
};

export type Car = Vehicle & {
  __typename?: 'Car';
  licensePlate?: Maybe<Scalars['String']>;
  maxSpeed?: Maybe<Scalars['Int']>;
};

export type Cat = {
  __typename?: 'Cat';
  gender?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Dog = {
  __typename?: 'Dog';
  age?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type Faction = Node & {
  __typename?: 'Faction';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  ships?: Maybe<ShipConnection>;
};

export type Human = {
  __typename?: 'Human';
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  input?: InputMaybe<AddUserInput>;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  empire?: Maybe<Faction>;
  node?: Maybe<Node>;
  rebels?: Maybe<Faction>;
  search?: Maybe<Array<Maybe<SearchResult>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryRebelsArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type SearchResult = Cat | Dog | Human;

export type Ship = Node & {
  __typename?: 'Ship';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ShipConnection = {
  __typename?: 'ShipConnection';
  edges?: Maybe<Array<Maybe<ShipEdge>>>;
  pageInfo: PageInfo;
};

export type ShipEdge = {
  __typename?: 'ShipEdge';
  cursor: Scalars['String'];
  node?: Maybe<Ship>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Vehicle = {
  maxSpeed?: Maybe<Scalars['Int']>;
};

export type AddUserMutationMutationVariables = Exact<{
  user?: InputMaybe<AddUserInput>;
}>;


export type AddUserMutationMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', name?: string | null, id: string, age?: number | null } | null };

export type UsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQueryQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', name?: string | null, id: string, age?: number | null } | null> | null };


export const AddUserMutationDocument = gql`
    mutation AddUserMutation($user: AddUserInput) {
  addUser(input: $user) {
    name
    id
    age
  }
}
    `;
export type AddUserMutationMutationFn = Apollo.MutationFunction<AddUserMutationMutation, AddUserMutationMutationVariables>;

/**
 * __useAddUserMutationMutation__
 *
 * To run a mutation, you first call `useAddUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutationMutation, { data, loading, error }] = useAddUserMutationMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useAddUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutationMutation, AddUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutationMutation, AddUserMutationMutationVariables>(AddUserMutationDocument, options);
      }
export type AddUserMutationMutationHookResult = ReturnType<typeof useAddUserMutationMutation>;
export type AddUserMutationMutationResult = Apollo.MutationResult<AddUserMutationMutation>;
export type AddUserMutationMutationOptions = Apollo.BaseMutationOptions<AddUserMutationMutation, AddUserMutationMutationVariables>;
export const UsersQueryDocument = gql`
    query UsersQuery {
  users {
    name
    id
    age
  }
}
    `;

/**
 * __useUsersQueryQuery__
 *
 * To run a query within a React component, call `useUsersQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQueryQuery(baseOptions?: Apollo.QueryHookOptions<UsersQueryQuery, UsersQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQueryQuery, UsersQueryQueryVariables>(UsersQueryDocument, options);
      }
export function useUsersQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQueryQuery, UsersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQueryQuery, UsersQueryQueryVariables>(UsersQueryDocument, options);
        }
export type UsersQueryQueryHookResult = ReturnType<typeof useUsersQueryQuery>;
export type UsersQueryLazyQueryHookResult = ReturnType<typeof useUsersQueryLazyQuery>;
export type UsersQueryQueryResult = Apollo.QueryResult<UsersQueryQuery, UsersQueryQueryVariables>;