import styles from "../pages/styles/Form.module.css"

/* param: 
        -label {string} Nom du label
        -name {string} Attribut "name" de l'input
        -onChange {callBack} fonction d'événement sur l'input
        -errors {boolean} Valide ou non les informations saisie
*/

// A prévoir une limite de caractères.
export default function Textarea({ label, name, onChange, errors }) {

    return <label className={styles.containerLabelTextarea}>
        {label} :
        <textarea name={name} className={`${styles.textareaField} ${!errors ? styles.errorInput : styles.validInput}`} onChange={onChange} />
        {!errors && <span className={styles.spanError}>Champ obligatoire.</span>}
    </label>


}