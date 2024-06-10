
import { createContext, useState } from 'react';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes, loading, setLoading, error, setError }}>
      {children}
    </RecipesContext.Provider>
  );
};
