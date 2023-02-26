import { MenuType } from "@/types/menu.type";
import { formatPrice } from "@/utils/format.utils";
import { useState } from "react";
import styles from "../../styles/carteCategory.module.css";
import menuStyles from "../../styles/menu.module.css";
import CarteListItem from "./carteListItem";

interface MenusProps {
    menus: MenuType[]
}

export default function Menus({ menus }: MenusProps) {
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    const currentMenu = menus[currentDataIndex];
    
    return (
        <div className={styles.container}>
            <div className={styles.containerItem1}>
                <ul className={styles.categoriesList}>
                    {menus.map((m, index) => 
                        <li key={index} onClick={() => setCurrentDataIndex(index)}>
                            <CarteListItem content={m.nom} selected={index === currentDataIndex} />
                        </li>
                    )}                    
                </ul>
            </div>

            <div className={styles.containerItem2}>
                <div>
                    <div className={menuStyles.menuTitle}>
                        <h3>{currentMenu.nom} {formatPrice(currentMenu.prix)} €</h3>
                        {currentMenu.commentaire ? <span>{currentMenu.commentaire}</span> : ''}
                    </div>

                    <div className={menuStyles.menuCategory}>
                        <h4 className={menuStyles.menuCategoryTitle}>Boisson</h4>
                        <div>{ currentMenu.boisson}</div>
                        { currentMenu.commentaire_boissons ? <div className={styles.secondaryContent}>{currentMenu.commentaire_boissons}</div> : ''}
                    </div>

                    { currentMenu.entree ? 
                        <div className={menuStyles.menuCategory}>
                            <h4 className={menuStyles.menuCategoryTitle}>Entrée</h4>
                            <div>{currentMenu.entree}</div>
                            { currentMenu.commentaire_entree ? <div className={styles.secondaryContent}>{currentMenu.commentaire_entree}</div> : ''}
                        </div>
                    : ''}

                    <div className={menuStyles.menuCategory}>
                        <h4 className={menuStyles.menuCategoryTitle}>Plat</h4>
                        <div>{currentMenu.plat}</div>
                        { currentMenu.commentaire_plat ? <div className={styles.secondaryContent}>{currentMenu.commentaire_plat}</div> : ''}
                    </div>

                    <div className={menuStyles.menuCategory}>
                        <h4 className={menuStyles.menuCategoryTitle}>Dessert</h4>
                        <div>{currentMenu.dessert}</div>
                        { currentMenu.commentaire_dessert ? <div className={styles.secondaryContent}>{currentMenu.commentaire_dessert}</div> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}