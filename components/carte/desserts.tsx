import { DessertsType } from "@/types/dessert.type"
import { formatPrice } from "@/utils/format.utils";
import { useState } from "react";
import CarteListItem from "./carteListItem";
import styles from "../../styles/carteCategory.module.css";
import CarteItem from "./carteItem";

interface DessertsProps {
    data: DessertsType
}

export default function Desserts({ data }: DessertsProps) {
    const [DESSERTS_CATEGORY] = [1];
    const [currentData, setCurrentData] = useState(DESSERTS_CATEGORY);

    function getCurrentData() {
        switch (currentData) {
            case DESSERTS_CATEGORY:
                return data.desserts;
            default:
                return data.desserts;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerItem1}>
                <ul className={styles.categoriesList}>
                    <li onClick={() => setCurrentData(DESSERTS_CATEGORY)}><CarteListItem content="Nos Desserts" selected={DESSERTS_CATEGORY === currentData} /></li>
                </ul>
            </div>

            <div className={styles.containerItem2}>
                {getCurrentData().map((cd, index) => <CarteItem key={index} dishName={cd.nom} price={cd.prix} comment={cd.commentaire} />)}
            </div>
        </div>
    )
}