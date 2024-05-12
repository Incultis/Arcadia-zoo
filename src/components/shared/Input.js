import styles from "../pages/styles/Form.module.css"

export default function Input({ label, type, name, onChange }) {

    return <label className={styles.containerLabel}>
        {label} :
        <input type={type} name={name} className={styles.inputField} onChange={onChange} />
    </label>

}