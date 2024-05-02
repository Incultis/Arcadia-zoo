import styles from '../pages/styles/Page.module.css'
// {boolean} background : active la class sur la balise section
export default function Section({ background, children }) {
    return <section className={`${background && styles.altBackground}`}>
        {children}
    </section>
}