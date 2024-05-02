import styles from '../pages/styles/Page.module.css'

export default function HeadContent({ children }) {

    return <div className={styles.containerTitleText}>
        {children}
    </div>
}