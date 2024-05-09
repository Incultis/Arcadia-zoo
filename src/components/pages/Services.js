import { useState } from "react";
import { CardServices } from "../Card";
import styles from './styles/Page.module.css'
import Section from '../shared/Section'
import HeadContent from '../shared/HeadContent'
import { useFocusScreen } from "../../hooks/useFocusScreen";


export default function Services() {
    // contient les données à afficher dans la div
    const [data, setData] = useState("");
    //
    const divFocus = useFocusScreen(data);

    function handleClick(e) { // fonction event de type click, les données sont récupéré au click
        setData({
            img: e.currentTarget.firstChild.src,
            title: e.currentTarget.innerText, //récupère le titre
            description: e.currentTarget.lastChild.innerText //récupère la description
        });

    }
    return <>
        <main>
            <Section background>
                <HeadContent>
                    <h2>Rejoignez-nous pour une aventure inoubliable !</h2>
                    <p>Que vous soyez passionné par les animaux, la nature ou simplement à la recherche d'une escapade enrichissante, le Zoo d'Arcadia vous promet une expérience unique à chaque visite. Reconnectez-vous avec la beauté de notre monde naturel et laissez-vous emporter par la magie de la faune sauvage.</p>
                </HeadContent>
                <div className={styles.cardContainer}>
                    <CardServices eventClick={handleClick} />
                </div>
                {data && <div className={styles.serviceFocus} id={data.title} ref={divFocus} tabIndex={0}>
                    <img src={data.img} alt="" />
                    <HeadContent>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </HeadContent>
                </div>}
            </Section>
        </main>
    </>
}