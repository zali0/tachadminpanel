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

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  subCategory: Array<Subcategory>;
  type: Scalars['String'];
};

export type Location = {
  accuracy: Scalars['Float'];
  altitude: Scalars['Float'];
  altitudeAccuracy: Scalars['Float'];
  heading: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  mocked: Scalars['Boolean'];
  speed: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory?: Maybe<Category>;
  addProduct?: Maybe<Product>;
  addStore?: Maybe<Store>;
  addUser?: Maybe<User>;
};


export type MutationAddStoreArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationAddUserArgs = {
  phoneNumber: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  department: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  manufacturer: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  quantityUnit: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Category>>;
  getStores?: Maybe<Array<Store>>;
  getSubCategory?: Maybe<Array<Category>>;
  ping: Scalars['String'];
  productsAroundMe: Array<Product>;
  sayHello: Scalars['String'];
};


export type QueryProductsAroundMeArgs = {
  location: Location;
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  products: Array<Product>;
};

export type Subcategory = {
  __typename?: 'Subcategory';
  image: Scalars['String'];
  name: Scalars['String'];
  noOfProducts: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type GetStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoresQuery = { __typename?: 'Query', getStores?: Array<{ __typename?: 'Store', id: number, name: string, phoneNumber: string, products: Array<{ __typename?: 'Product', id: number, name: string, manufacturer: string, quantity: number, quantityUnit: string, price: number, description: string, image: string, department: string }> }> | null };


export const GetStoresDocument = gql`
    query GetStores {
  getStores {
    id
    name
    phoneNumber
    products {
      id
      name
      manufacturer
      quantity
      quantityUnit
      price
      description
      image
      department
    }
  }
}
    `;

/**
 * __useGetStoresQuery__
 *
 * To run a query within a React component, call `useGetStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStoresQuery(baseOptions?: Apollo.QueryHookOptions<GetStoresQuery, GetStoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoresQuery, GetStoresQueryVariables>(GetStoresDocument, options);
      }
export function useGetStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoresQuery, GetStoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoresQuery, GetStoresQueryVariables>(GetStoresDocument, options);
        }
export type GetStoresQueryHookResult = ReturnType<typeof useGetStoresQuery>;
export type GetStoresLazyQueryHookResult = ReturnType<typeof useGetStoresLazyQuery>;
export type GetStoresQueryResult = Apollo.QueryResult<GetStoresQuery, GetStoresQueryVariables>;