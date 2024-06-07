import RecipesGrid from '@/components/recipes/RecipesGrid';

const BlogPage = () => {
  const recipes = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Recipe 1',
      description: 'This is the description for Recipe 1.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Recipe 2',
      description: 'This is the description for Recipe 2.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Recipe 3',
      description: 'This is the description for Recipe 3.'
    }
    
  ];

  return (
    // <div className={styles.container}>
    <div>
      <h1>Recipes</h1>
      <RecipesGrid cards={recipes} />
    </div>
  );
};

export default BlogPage;
