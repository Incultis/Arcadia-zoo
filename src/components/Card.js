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


export function CardServices() {
    const arrayServices = [{
        img: visite,
        title: "Visite guidée"
    },
    {
        img: train,
        title: "Tour en train"
    },
    {
        img: spectacle,
        title: "Spectacle"
    },
    {
        img: restauration,
        title: "Restauration"
    }
    ];

    const listServices = arrayServices.map(service => {
        return <div key={service.title} className='card'>
            <img src={service.img} alt="" className="card-img" />
            <span>{service.title}</span>
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
        return <div key={service.title} className='card'>
            <img src={service.img} alt="" className="card-img" />
            <span>{service.title}</span>
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
        return <div key={service.title} className='card'>
            <img src={service.img} alt="" className=" profile-img" />
            <span>{service.title}</span>
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
        return <div key={service.name} className='card card-review'>
            <h4>{service.name} :</h4>
            <p>{service.review}</p>
        </div>
    })

    return <>{listServices}</>
}

