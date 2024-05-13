import styles from "../pages/styles/Form.module.css"

/* param: 
        -label {string} Nom du label
        -type {string} Type de l'input 
        -name {string} Attribut "name" de l'input
        -onChange {callBack} fonction d'événement sur l'input
        -errors {boolean} Valide ou non les informations saisie
*/
export default function Input({ label, type, name, onChange, errors }) {

    return <label className={styles.containerLabelInput}>
        {label} :
        <input type={type} name={name} className={`${styles.inputField} ${!errors ? styles.errorInput : styles.validInput}`} onChange={onChange} />
        {!errors && <span className={styles.spanError}>Champ obligatoire. {name === "email" && "Email invalide."}</span>}
    </label>

}