import styles from "../styles/header.module.css";
import Image from "next/image";

export default function Header({ bannerImageSrc }: { bannerImageSrc : any }) {
    return (
      <div>        
        <div className={styles.headerContainer}>
          <Image style={{objectFit: "cover"}} src={bannerImageSrc} alt="Restaurant La Tonnelle" fill priority/>
          <div className={styles.headerContent}>
            <div className={styles.title}><h1>Restaurant La&nbsp;Tonnelle</h1></div>
            <div className={styles.subtitle}><h2>Cuisine créole</h2></div>
          </div>
        </div>
      </div>
    )
  }
  