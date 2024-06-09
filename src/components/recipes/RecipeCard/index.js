 "use client";
import Link from 'next/link';
import styles from './index.module.scss';
import Button from "@/components/UI/Button";

const Index = ({recipe_id, image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <Link href={`/blog/${recipe_id}`}>
        <Button type="submit" text="En savoir plus" />
        </Link>
      </div>
    </div>
  );
};

export default Index;
