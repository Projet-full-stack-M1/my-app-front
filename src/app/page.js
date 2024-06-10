// "use client";
// import styles from "./index.module.scss";
// import Link from "next/link";


// export default function Home() {
//   return (
   
//     <>
//  <div className="container">
//  <section className={styles.video__banner}>
//  <Link href="/blog">
//  <p>Decouvrez nos recettes internationales</p>
 
 
//  <video autoPlay loop muted> 
//    <source src="/video_recipes.mp4"/>
//  </video> </Link>
// </section>
// </div>
// </> 
//   );
// }

import styles from "./index.module.scss";
import Link from "next/link";
import AuthWrapper from "@/Authwrapper";
import { AuthProvider } from "@/context/AuthContext";
const Home = () => {
  return (

    <AuthProvider>
     <AuthWrapper>
      <div className="container">
        <section className={styles.video__banner}>
          <Link href="/blog">
            <p>Decouvrez nos recettes internationales</p>
          </Link>
          <video autoPlay loop muted>
            <source src="/video_recipes.mp4" />
          </video>
        </section>
      </div>
      </AuthWrapper>
    </AuthProvider>
   
  );
};

export default Home;
