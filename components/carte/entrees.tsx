import { EntreesType } from "@/types/entree.type"
import { useState } from "react";
import CarteListItem from "./carteListItem";
import styles from "../../styles/carteCategory.module.css";
import CarteItem from "./carteItem";

interface EntreesProps {
    data: EntreesType
}
export default function Entrees({ data }: EntreesProps) {
    const [ENTREES_CAT] = [1];
    const [currentData, setCurrentData] = useState(ENTREES_CAT);

    function getCurrentData() {
        return data.entrees;
    }
    return (
        <div className={styles.container}>
            <div className={styles.containerItem1}>
                <ul className={styles.categoriesList}>
                    <li onClick={() => setCurrentData(ENTREES_CAT)}>
                        <CarteListItem content="Nos entrées" selected={ENTREES_CAT === currentData} />
                    </li>
                </ul>
            </div>

            <div className={styles.containerItem2}>
                {getCurrentData().map((cd, index) => <CarteItem key={index} dishName={cd.nom} price={cd.prix} comment={cd.commentaire} />)}
            </div>
        </div>
    )
}