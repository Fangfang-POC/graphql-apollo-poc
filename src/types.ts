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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Human = {
  __typename?: 'Human';
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  input?: InputMaybe<AddUserInput>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
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
  users?: Maybe<UsersQueryResult>;
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


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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

export type Subscription = {
  __typename?: 'Subscription';
  userAdded?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  /** @deprecated test directive */
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UsersQueryResult = {
  __typename?: 'UsersQueryResult';
  totalCount?: Maybe<Scalars['Int']>;
  userList?: Maybe<Array<Maybe<User>>>;
};

export type Vehicle = {
  maxSpeed?: Maybe<Scalars['Int']>;
};

export type AddUserMutationMutationVariables = Exact<{
  user?: InputMaybe<AddUserInput>;
}>;


export type AddUserMutationMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', name?: string | null, id: string, age?: number | null, username?: string | null, gender?: Gender | null } | null };

export type DeleteUserMutationMutationVariables = Exact<{
  deleteUserId: Scalars['ID'];
}>;


export type DeleteUserMutationMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string, name?: string | null, age?: number | null, username?: string | null, gender?: Gender | null } | null };

export type UserComponent_NameFragment = { __typename?: 'User', name?: string | null };

export type UserComponent_UserFragment = { __typename?: 'User', username?: string | null, age?: number | null, gender?: Gender | null, name?: string | null };

export type UserComponentQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserComponentQueryQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, username?: string | null, age?: number | null, gender?: Gender | null, name?: string | null } | null };

export type UsersQueryQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type UsersQueryQuery = { __typename?: 'Query', users?: { __typename?: 'UsersQueryResult', totalCount?: number | null, userList?: Array<{ __typename?: 'User', name?: string | null, id: string, username?: string | null, gender?: Gender | null, age?: number | null } | null> | null } | null };

export type UserAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserAddedSubscription = { __typename?: 'Subscription', userAdded?: { __typename?: 'User', age?: number | null, name?: string | null } | null };

export const UserComponent_NameFragmentDoc = gql`
    fragment UserComponent_name on User {
  name
}
    `;
export const UserComponent_UserFragmentDoc = gql`
    fragment UserComponent_user on User {
  username
  age
  gender
  ...UserComponent_name
}
    ${UserComponent_NameFragmentDoc}`;
export const AddUserMutationDocument = gql`
    mutation AddUserMutation($user: AddUserInput) {
  addUser(input: $user) {
    name
    id
    age
    username
    gender
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
export const DeleteUserMutationDocument = gql`
    mutation DeleteUserMutation($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
    name
    age
    username
    gender
  }
}
    `;
export type DeleteUserMutationMutationFn = Apollo.MutationFunction<DeleteUserMutationMutation, DeleteUserMutationMutationVariables>;

/**
 * __useDeleteUserMutationMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutationMutation, { data, loading, error }] = useDeleteUserMutationMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutationMutation, DeleteUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutationMutation, DeleteUserMutationMutationVariables>(DeleteUserMutationDocument, options);
      }
export type DeleteUserMutationMutationHookResult = ReturnType<typeof useDeleteUserMutationMutation>;
export type DeleteUserMutationMutationResult = Apollo.MutationResult<DeleteUserMutationMutation>;
export type DeleteUserMutationMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutationMutation, DeleteUserMutationMutationVariables>;
export const UserComponentQueryDocument = gql`
    query UserComponentQuery($id: ID!) {
  user(id: $id) {
    id
    ...UserComponent_user
  }
}
    ${UserComponent_UserFragmentDoc}`;

/**
 * __useUserComponentQueryQuery__
 *
 * To run a query within a React component, call `useUserComponentQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserComponentQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserComponentQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserComponentQueryQuery(baseOptions: Apollo.QueryHookOptions<UserComponentQueryQuery, UserComponentQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserComponentQueryQuery, UserComponentQueryQueryVariables>(UserComponentQueryDocument, options);
      }
export function useUserComponentQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserComponentQueryQuery, UserComponentQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserComponentQueryQuery, UserComponentQueryQueryVariables>(UserComponentQueryDocument, options);
        }
export type UserComponentQueryQueryHookResult = ReturnType<typeof useUserComponentQueryQuery>;
export type UserComponentQueryLazyQueryHookResult = ReturnType<typeof useUserComponentQueryLazyQuery>;
export type UserComponentQueryQueryResult = Apollo.QueryResult<UserComponentQueryQuery, UserComponentQueryQueryVariables>;
export const UsersQueryDocument = gql`
    query UsersQuery($offset: Int, $limit: Int) {
  users(offset: $offset, limit: $limit) {
    totalCount
    userList {
      name
      id
      username
      gender
      age
    }
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
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
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
export const UserAddedDocument = gql`
    subscription UserAdded {
  userAdded {
    age
    name
  }
}
    `;

/**
 * __useUserAddedSubscription__
 *
 * To run a query within a React component, call `useUserAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUserAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UserAddedSubscription, UserAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserAddedSubscription, UserAddedSubscriptionVariables>(UserAddedDocument, options);
      }
export type UserAddedSubscriptionHookResult = ReturnType<typeof useUserAddedSubscription>;
export type UserAddedSubscriptionResult = Apollo.SubscriptionResult<UserAddedSubscription>;