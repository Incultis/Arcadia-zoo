import styles from './pages/styles/Page.module.css'
// le button sera changer en navlink lors du routage
export default function ButtonLink({ children }) {

    return <button className={styles.buttonLink}>{children}</button>
}