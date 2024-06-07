// import { useRouter } from 'next/router';
// import styles from './index.module.scss';

const RecipeDetail = () => {
//   const router = useRouter();
  const { id } = router.query;

  const recipe = {
    image: 'https://via.placeholder.com/300x200',
    title: `Recipe ${id}`,
    description: `This is the detailed description for Recipe ${id}.`
  };

  return (
    // <div className={styles.container}>
     <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title}  />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
