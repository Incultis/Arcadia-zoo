import HeadContent from "../shared/HeadContent";
import Section from "../shared/Section";
import styles from '../pages/styles/Page.module.css'
import { CardAnimals, CardHabitats } from "../Card";
import { getHabitatByName } from "../../mockData/dataHabitats";
import { useState } from "react";
import Carousel from "../Carousel";
import { useFocusScreen } from "../../hooks/useFocusScreen";
//Page Habitat: click sur une "card" d'un habitat pour afficher les données correspondantes.
export default function Habitats() {
    const [data, setData] = useState("");
    const divFocus = useFocusScreen(data);
    const handleClick = (e) => {
        setData(getHabitatByName(e.currentTarget.lastChild.innerText));
    }

    return <main>
        <Section background>
            <HeadContent>
                <h2>Nos habitats :</h2>
                <p>Au cœur de notre zoo, explorez une diversité d'habitats extraordinaires qui abritent une variété fascinante d'animaux sauvages. Chaque habitat est soigneusement conçu pour offrir un environnement naturel et confortable à nos résidents, tout en permettant aux visiteurs de s'immerger dans leur monde captivant.</p>
            </HeadContent>
            <div className={styles.cardContainer}>
                <CardHabitats eventClick={handleClick} />
            </div>
            {data && <>
                <Section >
                    <HeadContent>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </HeadContent>
                    <div className={styles.card} ref={divFocus} tabIndex={0}>
                        <Carousel arrayImg={data.img} />
                    </div>
                </Section>
                <h2>Résidents de l'habitat :</h2>
                <div className={styles.cardContainer}>
                    <CardAnimals arrayAnimals={data.listAnimals} />
                </div>
            </>}
        </Section>
    </main>
}