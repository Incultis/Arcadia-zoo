import styles from "../pages/styles/Form.module.css"

/* param: 
        -label {string} Nom du label
        -name {string} Attribut "name" de l'input
        -onChange {callBack} fonction d'événement sur l'input
        -errors {boolean} Valide ou non les informations saisie
*/
export default function Textarea({ label, name, onChange, errors }) {

    return <label className={styles.containerLabelTextarea}>
        {label} : {!errors && <span>Champ obligatoire.</span>}
        <textarea name={name} className={styles.textareaField} onChange={onChange} />
    </label>


}