import styles from "./index.module.scss";

export default function Home() {
  return (
   
    <>
 <div className="container">
 <section className={styles.video__banner}>
 <div className={styles.overlay}></div>
 <video autoPlay loop muted>
   <source src="/video_recipes.mp4"/>
 </video>
</section>
</div>
</> 
  );
}
