
"use client";
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { fetchApi } from '@/services/fetchapi';
import RecipeDetails from '@/components/recipes/RecipeDetails';
import { GET_RECIPE } from '@/graphql/queries';

const DetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await fetchApi(GET_RECIPE, { recipe_id :id});
        setRecipe(data.getRecipe);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!recipe) return null;

  // const formattedRecipe = {
  //   image: `${process.env.NEXT_PUBLIC_BACKEND_API}/${recipe.photo_url}`,
  //   title: recipe.name,
  //   description: recipe.preparation,
  // };
  
  return (
    <div >
      <h1>Recipe Details</h1>
      {/* <RecipeDetails recipe={formattedRecipe} /> */}
      <RecipeDetails/>
    </div>
  );
};

export default DetailsPage;
