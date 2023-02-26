import styles from '../styles/Home.module.css';
import { BoissonsType } from '@/types/boisson.type';
import { EntreesType } from '@/types/entree.type';
import { PlatsType } from '@/types/plat.type';
import { DessertsType } from '@/types/dessert.type';
import client from '@/services/client';
import Map from '../components/nous-situer/map';
import CarteSection from '@/components/carte/CarteSection';
import { MenuType } from '@/types/menu.type';
import HorairesEtReservation from '@/components/horairesEtReservation';
import Image from 'next/image';
import Header from '@/components/header';
import { SiteSettingsType } from '@/types/siteSettings.type';
import { HorairesType } from '@/types/horaires.type';
import Head from 'next/head';

interface HomeProps {
  boissons: BoissonsType,
  entrees: EntreesType,
  plats: PlatsType,
  desserts: DessertsType,
  menus: MenuType[],
  siteSettings: SiteSettingsType,
  horaires: HorairesType
}

export default function Home({ boissons, entrees, plats, desserts, menus, siteSettings, horaires }: HomeProps) {

  return (
    <>
      <Head>
        <title>Restaurant La Tonnelle</title>
        <meta name="description" 
        content="Restaurant La Tonnelle, cuisine créole à l'Anse Mitan, Pointe du bout, Les Trois-Ilets, Martinique. Grillades, langouste, plats mijotés, poissons, salades."/>
      </Head>

      <Header bannerImageSrc={siteSettings.header_image_url} />

      { siteSettings.information ? <div className={styles.messageDefilantContainer}>
        <div className={styles.messageDefilant}><span className={styles.info}>{siteSettings.information}</span></div></div> : ""}

      <main className={styles.main}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>La carte</h3>
          <CarteSection boissons={boissons} entrees={entrees} plats={plats} desserts={desserts} menus={menus} />
        </section>

        <section className={styles.sectionFluid}>
          <div className={styles.imageTextContainer}>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src={siteSettings.image_1_url} alt='Restaurant La Tonnelle' fill/>
            </div>

            <div className={styles.textContainer}>
              <h3 className={styles.textContainerTitle}>Horaires d{'\''}ouverture et réservation</h3>
              <HorairesEtReservation reservationTelNumber={siteSettings.reservation_number} horaires={horaires} />
            </div>
          </div>
        </section>

        <section className={styles.sectionFluid}>
          <div className={styles.imageTextContainer}>
            <div className={styles.textContainer}>
              <h3 className={styles.textContainerTitle}>Nous situer</h3>
              <div className={styles.textContainerContent}>
                <div>
                  <h4>Adresse</h4>
                  <p>
                    3 rue des amandiers
                    <br/>
                    Anse Mitan, Les Trois-Ilets
                    <br/>
                    97 229 Martinique
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <Map className={styles.map} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  // boissons
  const aperitifs = await client.fetch(`*[_type == "aperitif"]`);
  const boissonsFraiches = await client.fetch(`*[_type == "boisson_fraiche"]`);
  const boissonsChaudes = await client.fetch(`*[_type == "boisson_chaude"]`);
  const cocktailsAlcoolise = await client.fetch(`*[_type == "cocktail_alcoolise"]`);
  const cocktailsSansAlcool = await client.fetch(`*[_type == "cocktail_sans_alcool"]`);
  const vins = await client.fetch(`*[_type == "vin"]`);
  const digestifs = await client.fetch(`*[_type == "digestif"]`);

  // entrees
  const entrees = await client.fetch(`*[_type == "entree"]`);

  // plats
  const platsMijotes = await client.fetch(`*[_type == "plat_mijote"]`);
  const grillades = await client.fetch(`*[_type == "grillade"]`);
  const produitsMer = await client.fetch(`*[_type == "mer"]`);
  const salades = await client.fetch(`*[_type == "salade"]`);

  // desserts
  const desserts = await client.fetch(`*[_type == "dessert"]`);

  // menus
  const menus = await client.fetch(`*[_type == "menu"]`);
  
  // site settings
  const siteSettings = await client.fetch(`*[_type == "siteSettings"]{
    information,
    reservation_number,
    "header_image_url": header_image.asset->url,
    "image_1_url": image_1.asset->url
  }`);

  // horaires
  const horaires = await client.fetch(`*[_type == "horaires_ouverture"]`);

  return {
    props: {
      boissons: {
        aperitifs,
        boissonsFraiches,
        cocktailsAlcoolise,
        cocktailsSansAlcool,
        vins,
        boissonsChaudes,
        digestifs
      },
      entrees: {
        entrees
      },
      plats: {
        grillades,
        platsMijotes,
        produitsMer,
        salades
      },
      desserts: {
        desserts
      },
      menus: menus,
      siteSettings: siteSettings[0], // singleton document
      horaires: horaires[0] // singleton document
    }
  }
}