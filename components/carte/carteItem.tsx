import { formatPrice } from "@/utils/format.utils";
import styles from "../../styles/carteItem.module.css";

interface CarteItemProps {
    dishName: string,
    price: number,
    comment?: string
}

export default function CarteItem({ dishName, price, comment} : CarteItemProps) {
    return (
        <div className={styles.container}>
            <div className={styles.mainContentContainer}>
                <span>{dishName}</span>
                <span>{formatPrice(price)}&nbsp;€</span>
            </div>

            {comment ? <div className={styles.secondaryContent}>{comment}</div> : ""}
        </div>
    );
}