import styles from "../pages/styles/Form.module.css"

export default function Textarea({ label, name, value, fonction }) {

    return <label className={styles.containerLabel}>
        {label} :
        <textarea name={name} value={value} className={styles.textareaField} />
    </label>


}