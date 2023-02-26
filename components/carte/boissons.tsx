import { BoissonsType } from "@/types/boisson.type";
import { useState } from "react";
import CarteListItem from "./carteListItem";
import styles from "../../styles/carteCategory.module.css";
import CarteItem from "./carteItem";
  
interface BoissonsProps {
    data: BoissonsType
}

export default function Boissons({ data }: BoissonsProps) {
    const [APERITIFS_CAT, COCKTAIL_ALC_CAT, COCKTAIL_NON_ALC_CAT, BOISSONS_CH_CAT, BOISSONS_FR_CAT, VINS_CAT, DIGESTIFS_CAT] = [1,2,3,4,5,6,7];
    const [currentData, setCurrentData] = useState(APERITIFS_CAT);

    function getCurrentData() {
        switch (currentData) {
            case APERITIFS_CAT:
                return data.aperitifs;
            case COCKTAIL_ALC_CAT:
                return data.cocktailsAlcoolise;
            case COCKTAIL_NON_ALC_CAT:
                return data.cocktailsSansAlcool;
            case BOISSONS_CH_CAT:
                return data.boissonsChaudes;
            case BOISSONS_FR_CAT:
                return data.boissonsFraiches;
            case VINS_CAT:
                return data.vins;
            case DIGESTIFS_CAT:
                return data.digestifs;
            default:
                return data.aperitifs;
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.containerItem1}>
                <ul className={styles.categoriesList}>
                    <li onClick={() => setCurrentData(APERITIFS_CAT)}>
                        <CarteListItem content="Apéritifs" selected={currentData === APERITIFS_CAT} />
                    </li>
                    <li onClick={() => setCurrentData(COCKTAIL_ALC_CAT)}>
                        <CarteListItem content="Cocktails alcoolisés" selected={COCKTAIL_ALC_CAT === currentData} />
                    </li>
                    <li onClick={() => setCurrentData(COCKTAIL_NON_ALC_CAT)}>
                        <CarteListItem content="Cocktails non alcoolisés" selected={COCKTAIL_NON_ALC_CAT === currentData} />
                    </li>
                    <li onClick={() => setCurrentData(BOISSONS_CH_CAT)}>
                        <CarteListItem content="boissons chaudes" selected={BOISSONS_CH_CAT === currentData} />
                    </li>
                    <li onClick={() => setCurrentData(BOISSONS_FR_CAT)}>
                        <CarteListItem content="Boissons fraiches" selected={BOISSONS_FR_CAT === currentData} />
                    </li>
                    <li onClick={() => setCurrentData(VINS_CAT)}>
                        <CarteListItem content="Carte des Vins" selected={VINS_CAT === currentData} />
                    </li>
                    <li onClick={() => setCurrentData(DIGESTIFS_CAT)}>
                        <CarteListItem content="Digestifs" selected={DIGESTIFS_CAT === currentData} />
                    </li>
                </ul>
            </div>

            <div className={styles.containerItem2}>
                {getCurrentData().map((cd, index) => <CarteItem key={index} dishName={cd.nom} price={cd.prix} comment={cd.commentaire} />)}
            </div>
        </div>
    )
}