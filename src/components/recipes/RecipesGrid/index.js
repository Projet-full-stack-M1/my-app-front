

"use client";

import RecipeCard from '../RecipeCard';
import styles from './index.module.scss';

const Index = ({ cards }) => {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <RecipeCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Index;
