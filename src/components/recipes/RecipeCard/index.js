"use client";
import { useRouter } from "next/navigation"; 
import styles from './index.module.scss';
import Button from "@/components/UI/Button";

const Index = ({ recipe_id, image, title, description }) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (recipe_id) {
      router.push(`/blog/${recipe_id}`);
    } else {
      console.error("recipe_id is undefined");
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <Button type="button" text="En savoir plus" handleClick={handleRedirect} />
      </div>
    </div>
  );
};

export default Index;
