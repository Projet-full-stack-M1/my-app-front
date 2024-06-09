"use client";
import styles from "./index.module.scss";
import Link from "next/link";


export default function Home() {
  return (
   
    <>
 <div className="container">
 <section className={styles.video__banner}>
 {/* <div className={styles.overlay}></div> */}
 <Link href="/blog">
 <p>Decouvrez nos recettes internationales</p>
 
 
 <video autoPlay loop muted> 
   <source src="/video_recipes.mp4"/>
 </video> </Link>
</section>
</div>
</> 
  );
}
