
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
        console.log(`Fetching recipe with ID: ${id}`);
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

 
  
  return (
    <div >
      <h1>Recipe Details</h1>
      
      <RecipeDetails recipe={recipe}/>
    </div>
  );
};

export default DetailsPage;
