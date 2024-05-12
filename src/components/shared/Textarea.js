import styles from "../pages/styles/Form.module.css"

export default function Textarea({ label, name, onChange }) {

    return <label className={styles.containerLabel}>
        {label} :
        <textarea name={name} className={styles.textareaField} onChange={onChange} />
    </label>


}