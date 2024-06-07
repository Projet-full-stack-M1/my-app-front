import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation registerUser($user: UserInput!) {
        registerUser(user: $user) {
            token
        }
    }
`;

export const GET_ME = gql`
    mutation GetMe {
        getMe {
            id
            firstName
            lastName
            mail
        }
    }
`;
