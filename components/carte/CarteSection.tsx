import { useState } from 'react';
import Boissons from './boissons';
import Desserts from './desserts';
import Entrees from './entrees';
import styles from '../../styles/carte.module.css';
import Plats from './plats';
import { BoissonsType } from '@/types/boisson.type';
import { EntreesType } from '@/types/entree.type';
import { PlatsType } from '@/types/plat.type';
import { DessertsType } from '@/types/dessert.type';
import Menus from './menus';
import { MenuType } from '@/types/menu.type';

interface CarteProps {
  boissons: BoissonsType,
  entrees: EntreesType,
  plats: PlatsType,
  desserts: DessertsType,
  menus: MenuType[]
}

export default function CarteSection({ boissons, entrees, plats, desserts, menus }: CarteProps) {

  const [BOISSONS_CATEGORY, ENTREES_CATEGORY, PLATS_CATEGORY, DESSERTS_CATEGORY, MENUS_CATEGORY] = [1,2,3,4,5];
  const [category, setCategory] = useState(BOISSONS_CATEGORY);

  function getContentByCategory() {
    switch (category) {
      case BOISSONS_CATEGORY:
        return <Boissons data={boissons} />;
      case ENTREES_CATEGORY:
        return <Entrees data={entrees} />;
      case PLATS_CATEGORY:
        return <Plats data={plats} />;
      case DESSERTS_CATEGORY:
        return <Desserts data={desserts} />;
      case MENUS_CATEGORY:
        return <Menus menus={menus}/>;
      default: return <Boissons data={boissons} />;
    }
  }

  return (
    <div>
      <div className={styles.tabs}>
        <button className={category === BOISSONS_CATEGORY ? styles.selected : ''} onClick={() =>setCategory(BOISSONS_CATEGORY)}>Boissons</button>
        <button className={category === ENTREES_CATEGORY ? styles.selected : ''} onClick={() =>setCategory(ENTREES_CATEGORY)}>Entrées</button>
        <button className={category === PLATS_CATEGORY ? styles.selected : ''} onClick={() =>setCategory(PLATS_CATEGORY)}>Plats</button>
        <button className={category === DESSERTS_CATEGORY ? styles.selected : ''} onClick={() =>setCategory(DESSERTS_CATEGORY)}>Desserts</button>
        <button className={category === MENUS_CATEGORY ? styles.selected : ''} onClick={() =>setCategory(MENUS_CATEGORY)}>Menus</button>
      </div>

      { getContentByCategory() }
    </div>
  );
}