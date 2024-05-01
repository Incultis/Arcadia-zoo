import { useEffect, useRef, useState } from "react";
import { CardServices } from "../Card";
import "./styles/Services.css" // problème style ouverture d'un ticket

export default function Services() {
    const testFocus = useRef(null);
    const [visible, setVisible] = useState(false); //cache la div de description
    const [data, setData] = useState({
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
            title: e.currentTarget.innerText, //récupère le titre
            description: e.currentTarget.lastChild.innerText //récupère la description
        });

    }
    return <>
        <section className='alt-background'>
            <div className='container-title-text'>
                <h2>Rejoignez-nous pour une aventure inoubliable !</h2>
                <p>Que vous soyez passionné par les animaux, la nature ou simplement à la recherche d'une escapade enrichissante, le Zoo d'Arcadia vous promet une expérience unique à chaque visite. Reconnectez-vous avec la beauté de notre monde naturel et laissez-vous emporter par la magie de la faune sauvage.</p>
            </div>
            <div className='card-container'>
                <CardServices click={handle} description={true} />
            </div>
            {visible && <div id={data.title} ref={testFocus} tabIndex={0}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>}
        </section>
    </>
}