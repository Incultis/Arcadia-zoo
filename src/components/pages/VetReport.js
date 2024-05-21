import { NavLink, Outlet } from "react-router-dom";
import styles from "../pages/styles/Dashboard.module.css"
import Section from "../shared/Section";

//Ce composant représente la page contenant les rapports des vétérinaires sur les habitats et les animaux.
export default function VetReport() {

    //console.log(dataHabitats[0].commentaire[0])
    return <Section>
        <h3>Rapport vétérinaire :</h3>
        <div className={styles.boardReport}>
            <div className={styles.navReport}>
                <ul>
                    <li><NavLink to="/dashboard/rapport/habitats" >Habitats</NavLink></li>
                    <li>Animaux</li>
                </ul>
            </div>
            <Outlet />
        </div>
    </Section>
}