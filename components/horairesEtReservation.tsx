import { HorairesType } from "@/types/horaires.type";
import styles from "../styles/horairesEtReservation.module.css";

interface HorairesEtReservationProps {
    reservationTelNumber: string,
    horaires: HorairesType
}
export default function HorairesEtReservation({ reservationTelNumber, horaires } : HorairesEtReservationProps) {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.menuJoursList}>
                    <ul className={styles.dataList}>
                        <li>Lundi</li>
                        <li>Mardi</li>
                        <li>Mercredi</li>
                        <li>Jeudi</li>
                        <li>Vendredi</li>
                        <li>Samedi</li>
                        <li>Dimanche</li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.dataList}>
                        <li>{horaires.lundi_midi ?? "fermé"}</li>
                        <li>{horaires.mardi_midi ?? "fermé"}</li>
                        <li>{horaires.mercredi_midi ?? "fermé"}</li>
                        <li>{horaires.jeudi_midi ?? "fermé"}</li>
                        <li>{horaires.vendredi_midi ?? "fermé"}</li>
                        <li>{horaires.samedi_midi ?? "fermé"}</li>
                        <li>{horaires.dimanche_midi ?? "fermé"}</li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.dataList}>
                        <li>{horaires.lundi_soir ?? "fermé"}</li>
                        <li>{horaires.mardi_soir ?? "fermé"}</li>
                        <li>{horaires.mercredi_soir ?? "fermé"}</li>
                        <li>{horaires.jeudi_soir ?? "fermé"}</li>
                        <li>{horaires.vendredi_soir ?? "fermé"}</li>
                        <li>{horaires.samedi_soir ?? "fermé"}</li>
                        <li>{horaires.dimanche_soir ?? "fermé"}</li>
                    </ul>
                </div>
            </div>

            <h3 style={{ textAlign: "center"}}>Réservation au {reservationTelNumber}</h3>
        </div>
    )
}