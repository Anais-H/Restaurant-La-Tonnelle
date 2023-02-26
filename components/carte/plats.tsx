import { PlatsType } from "@/types/plat.type"
import { formatPrice } from "@/utils/format.utils";
import { useState } from "react";
import CarteListItem from "./carteListItem";
import styles from "../../styles/carteCategory.module.css";
import CarteItem from "./carteItem";

interface PlatsProps {
    data: PlatsType
}

export default function Plats({ data }: PlatsProps) {
    const [PLATS_MIJ_CAT, PRODUITS_MER_CAT, GRILLADES_CAT, SALADES_CAT] = [1,2,3,4];
    const [currentData, setCurrentData] = useState(PLATS_MIJ_CAT);

    function getCurrentData() {
        switch (currentData) {
            case PLATS_MIJ_CAT:
                return data.platsMijotes;
            case PRODUITS_MER_CAT:
                return data.produitsMer;
            case GRILLADES_CAT:
                return data.grillades;
            case SALADES_CAT:
                return data.salades;
            default:
                return data.platsMijotes;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerItem1}>
                <ul className={styles.categoriesList}>
                    <li onClick={() => setCurrentData(PLATS_MIJ_CAT)}><CarteListItem content="Plats mijotés" selected={currentData === PLATS_MIJ_CAT} /></li>
                    <li onClick={() => setCurrentData(PRODUITS_MER_CAT)}><CarteListItem content="Produits de la Mer" selected={currentData === PRODUITS_MER_CAT} /></li>
                    <li onClick={() => setCurrentData(GRILLADES_CAT)}><CarteListItem content="Grillades" selected={currentData === GRILLADES_CAT} /></li>
                    <li onClick={() => setCurrentData(SALADES_CAT)}><CarteListItem content="Salades" selected={currentData === SALADES_CAT} /></li>
                </ul>
            </div>

            <div className={styles.containerItem2}>
                {getCurrentData().map((cd, index) => <CarteItem key={index} dishName={cd.nom} price={cd.prix} comment={cd.commentaire} />)}
            </div>
        </div>
    )
}