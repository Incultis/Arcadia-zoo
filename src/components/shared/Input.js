import styles from "../pages/styles/Form.module.css"

export default function Input({ label, type, name, value, fonction }) {

    return <label className={styles.containerLabel}>
        {label} :
        <input type={type} name={name} value={value} className={styles.inputField} />
    </label>

}