import styles from "../pages/styles/Dashboard.module.css"
import { dataHabitats } from "../../mockData/dataHabitats";
import ReportHabitat from "../ReportHabitat";
import { useState } from "react";

//Ce composant représente la sous page des informations liés aux habitats écrient par les vétérinaires.
export default function ReportAllHabitats() {
    //State contenant l'id d'un habitat ou "" (string vide), si aucun habitat est sélectionné.
    const [selection, setSelection] = useState("");

    //Fonction qui filtre les habitats selon un id. Retourne un tableau d'objet habitat.
    //param: id {string || number}
    const filterById = (id) => { return id ? dataHabitats.filter(filterHab => filterHab.id === id) : dataHabitats }

    //Liste les commentaires des habitats filtré par la fonction "filterById"
    const listReport = filterById(selection).map(habitat => habitat.commentaire.map(comment => {
        return <div key={comment.id} className={styles.containerReport}><ReportHabitat dataCommentary={comment} /></div>
    }))


    return <div className={styles.resultReport}>
        <h4>Rapport sur les habitats :</h4>
        {/*Contient la liste cliquable des habitats présents dans le mockData + un élément regroupant tout les habitats*/}
        <div className={styles.selectionList}>
            <div onClick={() => setSelection("")} className={selection === "" ? `${styles.selected}` : `${styles.unselect}`}>
                Tous les habitats
            </div>
            {dataHabitats.map(habitat => {
                return <div key={habitat.id} onClick={() => setSelection(habitat.id)}
                    className={selection === habitat.id ? `${styles.selected}` : `${styles.unselect}`}>
                    {habitat.title}
                </div>
            })}
        </div>
        <div className={styles.listReport}>
            {listReport}
        </div>
    </div>
}