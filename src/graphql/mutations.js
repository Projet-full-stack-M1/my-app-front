import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation Register($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
        register(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
            user_id
            first_name
            last_name
            email
        }
    }
`;


export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                user_id
                first_name
                last_name
                email
            }
        }
    }
`;