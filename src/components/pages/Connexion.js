import Input from "../shared/Input";
import Section from "../shared/Section";
import styles from "../pages/styles/Form.module.css"
import HeadContent from "../shared/HeadContent";
import { useEffect, useState } from "react";
import { checkCredentials } from "../../auth/sigin";

export default function Connexion() {
    //State {boolean} pour activer/désactiver le bouton de soumission du formulaire.
    const [isValid, setIsValid] = useState(false);
    //State {object} contient les information entrées par l'utilisateur.
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    // State {object} Valide ou non une à une les inputs avec une valeur booléenne.
    const [errorsForm, setErrorsForm] = useState({
        email: false,
        password: false
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
        setIsValid(errorsForm.email && errorsForm.password)
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
        // Vérification des informations de connexion simulé.
        checkCredentials(formData);

    }

    return <main>
        <Section background>
            <HeadContent>
                <h2>Connexion :</h2>
            </HeadContent>
            <form className={styles.containerForm} onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <Input label="Email" type="email" name="email" onChange={handleInput} errors={errorsForm.email} />
                    <Input label="Mot de passe" type="password" name="password" onChange={handleInput} errors={errorsForm.password} />
                    <button type="submit" className={styles.btnSubmit} disabled={!isValid}>Se connecter</button>
                </div>
            </form>
        </Section>
    </main>
}