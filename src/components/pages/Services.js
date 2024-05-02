import { useEffect, useRef, useState } from "react";
import { CardServices } from "../Card";
import styles from './styles/Page.module.css'
import Section from '../shared/Section'
import HeadContent from '../shared/HeadContent'


export default function Services() {
    const testFocus = useRef(null);
    const [visible, setVisible] = useState(false); //cache la div de description
    const [data, setData] = useState({
        img: "",
        title: "",
        description: ""

    }); // contient les données à afficher dans la div

    useEffect(() => { // quand les données changent le focus sur la div et fait
        if (testFocus.current) {
            testFocus.current.focus();
        }

    }, [data])
    function handle(e) { // fonction event de type click, les données sont récupéré au click
        setVisible(true);
        setData({
            img: e.currentTarget.firstChild.src,
            title: e.currentTarget.innerText, //récupère le titre
            description: e.currentTarget.lastChild.innerText //récupère la description
        });
        console.log(e.currentTarget.firstChild.src);
    }
    return <>
        <main>
            <Section background>
                <HeadContent>
                    <h2>Rejoignez-nous pour une aventure inoubliable !</h2>
                    <p>Que vous soyez passionné par les animaux, la nature ou simplement à la recherche d'une escapade enrichissante, le Zoo d'Arcadia vous promet une expérience unique à chaque visite. Reconnectez-vous avec la beauté de notre monde naturel et laissez-vous emporter par la magie de la faune sauvage.</p>
                </HeadContent>
                <div className={styles.cardContainer}>
                    <CardServices click={handle} interactive />
                </div>
                {visible && <div className={styles.serviceFocus} id={data.title} ref={testFocus} tabIndex={0}>
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