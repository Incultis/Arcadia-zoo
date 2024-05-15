import Input from "../shared/Input";
import Section from "../shared/Section";
import styles from "../pages/styles/Form.module.css"
import HeadContent from "../shared/HeadContent";

export default function Connexion() {

    return <main>
        <Section background>
            <HeadContent>
                <h2>Connexion :</h2>
            </HeadContent>
            <form className={styles.containerForm}  >
                <div className={styles.container}>
                    <Input label="Email" type="email" name="email" />
                    <Input label="Mot de passe" type="password" name="password" />
                    <button className={styles.btnSubmit}>Se connecter</button>
                </div>
            </form>
        </Section>
    </main>
}