import styles from "../../styles/map.module.css";

export default function Map({ className } : { className?: string | undefined}) {

    return (
      <div className={className + ' ' + styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1405.3466144021738!2d-61.052157390360534!3d14.555593651520942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c401d1f2ec3a821%3A0xaf894802a206298f!2sRestaurant%20la%20Tonnelle!5e0!3m2!1sfr!2sfr!4v1674392172923!5m2!1sfr!2sfr" 
          style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    )
  }
  