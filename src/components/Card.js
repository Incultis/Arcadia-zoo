import visite from '../assets/services/visite.jpg';
import train from '../assets/services/train.jpg';
import spectacle from '../assets/services/spectacle.jpg';
import restauration from '../assets/services/restauration.jpg';
import styles from './pages/styles/Page.module.css'; // fichier de styles
import { dataHabitats } from '../mockData/dataHabitats';
//Ficher regroupant les composant Card.

// param {fonction event} click sur une card
export function CardServices({ eventClick }) {
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
        return <div key={service.title} className={styles.card} onClick={eventClick} >
            <img src={service.img} alt="" className={`${styles.cardImg} ${eventClick && styles.cardHighlight}`} />
            <span className={styles.spanTitleAbsolute}>{service.title}</span>
            {eventClick && <p style={{ display: "none" }} >{service.description}</p>}
        </div>
    })

    return <>{listServices}</>
}
// param: {function event} si présent détecte le click sur la Card.
export function CardHabitats({ eventClick }) {

    const listHabitats = dataHabitats.map(habitat => {
        return <div key={habitat.id} className={styles.card} onClick={eventClick}>
            <img src={habitat.img[0]} alt="" className={`${styles.cardImg} ${eventClick && styles.cardHighlight}`} />
            <span className={styles.spanTitleBottom}>{habitat.title}</span>
        </div>
    })

    return <>{listHabitats}</>
}
// param: {array} tableau d'objet
export function CardAnimals({ arrayAnimals }) {


    const listAnimals = arrayAnimals.map(animal => {
        return <div key={animal.id} className={styles.card}>
            <img src={animal.img} alt="" className={styles.profileImg} />
            <span className={styles.spanTitleAbsolute}>{animal.race}</span>
        </div>
    })

    return <>{listAnimals}</>
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

