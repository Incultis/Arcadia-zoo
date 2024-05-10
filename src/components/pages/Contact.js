import Section from "../shared/Section";
import styles from "../pages/styles/Form.module.css"
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";

export default function Contact() {

    return <main>
        <Section background>
            <h2>Nous contacter :</h2>
            <form className={styles.containerForm}>
                <div className={styles.containerInputs}>
                    <div className={styles.inputRow}>
                        <Input label="Objet" name="object" type="text" />
                        <Input label="E-mail" name="email" type="email" />
                    </div>
                    <Textarea label="Message" name="message" />
                </div>
                <button>Envoyer</button>
            </form>
        </Section>
    </main>
}