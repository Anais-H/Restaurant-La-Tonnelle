import styles from "../styles/header.module.css";
import Image from "next/image";

export default function Header({ bannerImageSrc }: { bannerImageSrc : any }) {
    return (
      <div>        
        <div className={styles.headerContainer}>
          <Image style={{objectFit: "cover"}} src={bannerImageSrc} alt="Restaurant La Tonnelle" fill/>
          <div className={styles.headerContent}>
            <div className={styles.title}>Restaurant La&nbsp;Tonnelle</div>
            <div className={styles.subtitle}>Cuisine créole</div>
          </div>
        </div>
      </div>
    )
  }
  