import styles from '../pages/styles/Page.module.css'

// Container pour un titre et/ou texte
export default function HeadContent({ children }) {

    return <div className={styles.containerTitleText}>
        {children}
    </div>
}