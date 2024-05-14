import Section from "../shared/Section";
import styles from "../pages/styles/Form.module.css"
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import { useEffect, useState } from "react";
import HeadContent from "../shared/HeadContent";
// Page de formulaire de contact
export default function Contact() {
    //State {boolean} pour activer/désactiver le bouton de soumission du formulaire.
    const [isValid, setIsValid] = useState(false);
    //State {object} contient les information entrées par l'utilisateur.
    const [formData, setFormData] = useState({
        object: "",
        email: "",
        message: ""
    });
    // State {object} Valide ou non une à une les inputs avec une valeur booléenne.
    const [errorsForm, setErrorsForm] = useState({
        object: false,
        email: false,
        message: false
    });

    //Fonction qui permet de controler la validité des inputs en mettant à jour le State "errorsForm"; param ({string}: nom de l'input, {string}: valeur de l'input)
    const isFullAndValid = (dataName, dataValue) => {
        setErrorsForm({ ...errorsForm, [dataName]: (dataValue.trim() && dataName !== "email") })

        if (dataName === "email") {
            setErrorsForm({ ...errorsForm, [dataName]: (/\S+@\S+\.\S+/.test(dataValue.trim())) })

        }

    }
    //useEffect pour contrôler la validation du formulaire à chaque changement de errorsForm
    useEffect(() => {
        setIsValid(errorsForm.object && errorsForm.email && errorsForm.message)
    }, [errorsForm])

    // Fonction qui met à jour le State formData, branché avec un "onChange" sur les inputs.
    const handleInput = (e) => {
        const { name, value } = e.target;
        isFullAndValid(name, value);
        setFormData({ ...formData, [name]: value });
    }
    //Fonction d'envoie des données du formulaire.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données envoyées", formData) // simulation envoie
        // Mailling
    }

    return <main>
        <Section background>
            <HeadContent>
                <h2>Nous contacter :</h2>
            </HeadContent>

            <form className={styles.containerForm} onSubmit={handleSubmit} >
                <div className={styles.containerInputs}>
                    <div className={styles.inputRow}>
                        <Input label="Objet" name="object" type="text" onChange={handleInput} errors={errorsForm.object} />
                        <Input label="E-mail" name="email" type="email" onChange={handleInput} errors={errorsForm.email} />
                    </div>
                    <Textarea label="Message" name="message" onChange={handleInput} errors={errorsForm.message} />

                </div>
                <button type="submit" disabled={!isValid}>Envoyer</button>
            </form>
        </Section>
    </main>
}