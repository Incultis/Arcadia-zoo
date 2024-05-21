import { getHabitatById } from "../mockData/dataHabitats";
import { getUserById } from "../mockData/dataUsers";
import styles from "./pages/styles/Dashboard.module.css";

//Ce composant représente un commentaire sur un habitat.
// param: {object} 
export default function ReportHabitat({ dataCommentary }) {

    return < >
        <div className={styles.headReport}>
            <p>Habitat concerné : {getHabitatById(dataCommentary.habitat).title}</p>
            <p>Rédigé par : {getUserById(dataCommentary.editBy).name}</p>
        </div>
        <div className={styles.dataReport}>
            <p>Avis du professionel : {dataCommentary.avis}</p>
            <p>Details : {dataCommentary.detail}</p>
        </div>
    </>
}