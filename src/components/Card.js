import visite from '../assets/services/visite.jpg';
import train from '../assets/services/train.jpg';
import spectacle from '../assets/services/spectacle.jpg';
import restauration from '../assets/services/restauration.jpg';
import savane from '../assets/habitat/savane.jpg';
import jungle from '../assets/habitat/jungle.jpg';
import aquatique from '../assets/habitat/aquatique.jpg';
import elephant from '../assets/animaux/elephant.jpg';
import iguane from '../assets/animaux/iguane.jpg';
import lemurien from '../assets/animaux/lemurien.jpg';
import sealion from '../assets/animaux/sealion.jpg';
import styles from './pages/styles/Page.module.css'; // fichier de styles

// param {fonction} click sur une card
export function CardServices({ click, interactive }) {
    const arrayServices = [{
        img: visite,
        title: "Visite guidée",
        description: "Plongez au cœur de la nature sauvage avec notre visite guidée exclusive au Zoo d'Arcadia, où chaque pas révèle une nouvelle histoire sur la biodiversité fascinante de notre planète."
    },
    {
        img: train,
        title: "Tour en train",
        description: "Embarquez pour un voyage panoramique à travers les merveilles de la faune mondiale lors de notre tour en train au Zoo d'Arcadia"
    },
    {
        img: spectacle,
        title: "Spectacle",
        description: "Plongez dans un monde de magie aquatique avec notre spectacle captivant au Zoo d'Arcadia."
    },
    {
        img: restauration,
        title: "Restauration",
        description: "Au Zoo d'Arcadia, votre aventure ne s'arrête pas aux merveilles de la faune. Détendez-vous et régalez-vous avec notre offre de restauration variée, offrant des options délicieuses pour tous les goûts."
    }
    ];


    const listServices = arrayServices.map(service => {
        return <div key={service.title} className={styles.card} onClick={click} >
            <img src={service.img} alt="" className={`${styles.cardImg} ${interactive && styles.cardHighlight}`} />
            <span className={styles.spanTitleAbsolute}>{service.title}</span>
            {interactive && <p style={{ display: "none" }} >{service.description}</p>}
        </div>
    })

    return <>{listServices}</>
}

export function CardHabitats() {
    const arrayServices = [{
        img: savane,
        title: "Savane"
    },
    {
        img: jungle,
        title: "Jungle"
    },
    {
        img: aquatique,
        title: "Aquatique"
    }
    ];

    const listServices = arrayServices.map(service => {
        return <div key={service.title} className={styles.card}>
            <img src={service.img} alt="" className={styles.cardImg} />
            <span className={styles.spanTitleBottom}>{service.title}</span>
        </div>
    })

    return <>{listServices}</>
}

export function CardAnimals() {
    const arrayServices = [{
        img: elephant,
        title: "Elephant"
    },
    {
        img: iguane,
        title: "Iguane"
    },
    {
        img: lemurien,
        title: "Lémurien"
    },
    {
        img: sealion,
        title: "Lion de mer"
    }
    ];

    const listServices = arrayServices.map(service => {
        return <div key={service.title} className={styles.card}>
            <img src={service.img} alt="" className={styles.profileImg} />
            <span className={styles.spanTitleAbsolute}>{service.title}</span>
        </div>
    })

    return <>{listServices}</>
}

export function CardReview() {
    const arrayServices = [{
        name: "Bob",
        review: "Nous avons passé un très bon moment. Je recommande"
    },
    {
        name: "Jane",
        review: "Nous avons passé un très bon moment. Je recommande"
    },
    {
        name: "Paul",
        review: "Nous avons passé un très bon moment. Je recommande"
    },
    {
        name: "Lucy",
        review: "Nous avons passé un très bon moment. Je recommande"
    },
    ];

    const listServices = arrayServices.map(service => {
        return <div key={service.name} className={`${styles.card}  ${styles.cardReview}`}>
            <h4>{service.name} :</h4>
            <p>{service.review}</p>
        </div>
    })

    return <>{listServices}</>
}

