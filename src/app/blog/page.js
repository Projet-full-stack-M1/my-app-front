

"use client"; 

import { useEffect, useState } from 'react';
import { fetchApi } from '@/services/fetchapi';
import RecipesGrid from '@/components/recipes/RecipesGrid';
import { GET_RECIPES } from '../../graphql/queries';

const BlogPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await fetchApi(GET_RECIPES, {});
        setRecipes(data.getRecipes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const formattedRecipes = recipes.map(recipe => ({
    image:`${process.env.NEXT_PUBLIC_BACKEND_API}/${recipe.photo_url}`,
    title: recipe.name,
    // description: recipe.preparation,
  }));
  
  return (
    <div >
      <h1>Recipes</h1>
      <RecipesGrid cards={formattedRecipes} />
    </div>
  );
};

export default BlogPage;

