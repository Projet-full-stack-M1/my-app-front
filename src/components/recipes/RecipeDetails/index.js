import { useState } from 'react';
import { FaHeart, FaClock } from 'react-icons/fa';
import styles from './index.module.scss';

const RecipeDetail = ({ recipe }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className={styles.recipeCard}>
      <div className={styles.imageContainer}>
        <img src={recipe.photo_url} alt={recipe.name} className={styles.image} />
        <h2 className={styles.title}>{recipe.name}</h2>
        <div className={styles.icons}>
          <FaHeart className={isWishlist ? styles.heartActive : styles.heart} onClick={handleWishlistClick} />
          <FaClock className={styles.clock} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.sectionTitle}>Préparation</h3>
        <p className={styles.description}>{recipe.preparation}</p>
        <div className={styles.allergens}>
          
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
