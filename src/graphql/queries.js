import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
    query {
        getRecipes {
            recipe_id
            name
            country
            photo_url
            cooking_time
            preparation
            ingredients {
        ingredient_id
        name
      }
        }
    }
`;

export const GET_RECIPE = gql`
    query getRecipe($id: ID!) {
        getRecipe(id: $id) {
            recipe_id
            name
            country
            photo_url
            cooking_time
            preparation
            ingredients {
                ingredient_id
                name
            }
        }
    }
`;
