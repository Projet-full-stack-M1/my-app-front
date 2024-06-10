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
    query GetRecipe($recipe_id: ID!) {
        getRecipe(recipe_id: $recipe_id) {
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

export const GET_RECIPES_BY_COUNTRY = gql`
  query GetRecipesByCountry($country: String!) {
    getRecipesByCountry(country: $country) {
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