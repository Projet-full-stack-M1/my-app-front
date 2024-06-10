
"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "./index.module.scss";
import FilterInput from "../UI/FilterInput";
import { GET_RECIPES_BY_COUNTRY } from "@/graphql/queries";
import { fetchApi } from "@/services/fetchapi";

const Index = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [countries, setCountries] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCountries(["France", "Italy", "Maroc", "Japon", "Portugal", "Inde"]);
  }, []);

  const fetchRecipesByCountry = async (country) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchApi(GET_RECIPES_BY_COUNTRY, { country });
      setRecipes(data.getRecipesByCountry);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCountry = (country) => {
    console.log(`Filter recipes by country: ${country}`);
    fetchRecipesByCountry(country);
  };

  return (
    <>
      <header className={`${styles.header__main} ${isFixed ? styles.fixed : ""}`}>
        <Link href="/">
          <img className={styles.logo} src="/Logo.png" alt="Logo" />
        </Link>
        <FilterInput countries={countries} onSelectCountry={handleSelectCountry} />
      </header>

      <main>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className={styles.recipes}>
          {recipes.map((recipe) => (
            <div key={recipe.recipe_id} className={styles.recipeCard}>
              <img src={recipe.photo_url} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.country}</p>
              <p>{recipe.cooking_time} minutes</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Index;


