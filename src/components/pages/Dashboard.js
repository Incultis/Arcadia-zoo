import { NavLink, Outlet } from "react-router-dom";
import styles from "../pages/styles/Dashboard.module.css"
//mettre en place une redirection lors de la déconnexion

import HeadContent from "../shared/HeadContent";
import Section from "../shared/Section";

//conditionner l'affichage suivant le rôle.
export default function Dashboard() {
    return <Section background>
        <HeadContent>
            <h2>Tableau de bord :</h2>
        </HeadContent>
        <aside>
            <ul id="nav-dashboard" className={styles.navigationDashboard}>
                <li><NavLink to="/dashboard/rapport" >Rapport vétérinaire</NavLink></li>
                <li><NavLink to="/dashboard/gestion">Gestion</NavLink></li>
                <li><NavLink to="/dashboard/statistiques">Statistiques</NavLink></li>
            </ul>
        </aside>
        <Outlet />
    </Section>
}