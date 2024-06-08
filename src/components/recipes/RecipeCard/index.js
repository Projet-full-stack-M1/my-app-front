 "use client";
import Link from 'next/link';
import styles from './index.module.scss';

const Index = ({id, image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <Link href={`/blog/${id}`}>
        <button className={styles.cardButton}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
