import Section from "../shared/Section";
import styles from "../pages/styles/Form.module.css"
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import { useEffect, useState } from "react";

export default function Contact() {
    const [isValid, setIsValid] = useState(false);
    const [formData, setFormData] = useState({
        object: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        setIsValid(formData.object.trim() && formData.email.trim() && /\S+@\S+\.\S+/.test(formData.email) && formData.message.trim())
    }, [formData])


    const handleInput = (e) => {
        // console.log("actif")
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données envoyées", formData)
    }

    return <main>
        <Section background>
            <h2>Nous contacter :</h2>
            <form className={styles.containerForm} onSubmit={handleSubmit} >
                <div className={styles.containerInputs}>
                    <div className={styles.inputRow}>
                        <Input label="Objet" name="object" type="text" onChange={handleInput} />
                        <Input label="E-mail" name="email" type="email" onChange={handleInput} />
                    </div>
                    <Textarea label="Message" name="message" onChange={handleInput} />
                </div>
                <button type="submit" disabled={!isValid}>Envoyer</button>
            </form>
        </Section>
    </main>
}