import '../pages/styles/Accueil.css'
import MainImg from '../../assets/MainPictureAlt.png';
import broceliande from '../../assets/broceliande.jpg';
import { CardAnimals, CardHabitats, CardReview, CardServices } from '../Card';

export default function Accueil() {


    return <>
        <main>
            <img src={MainImg} alt='présentation du zoo' className='img-accueil' />
            <div className='container-head'>
                <img src={broceliande} alt='présentation de broceliande' className='resize-img' />
                <div className='container-title-text'>
                    <h1>Bienvenue à Arcadia</h1>
                    <p>Fondé en 1960 et niché près de la mystique forêt de Brocéliande en Bretagne, Arcadia est bien plus qu'un simple zoo.</p>
                </div>
            </div>
            <section>
                <div className='container-title-text'>
                    <h2>Expériences immersives :</h2>
                    <p>Participez à nos visites guidées interactives et assistez à des présentations d'animaux en direct pour une expérience éducative passionnante.</p>
                </div>
                <div className='card-container'>
                    <CardServices />
                </div>
            </section>
            <section>
                <div className='container-title-text'>
                    <h2>Découvrez nos habitats :</h2>
                    <p>Parcourez nos vastes habitats soigneusement aménagés pour offrir à chaque espèce un espace de vie naturel et stimulant.</p>
                </div>
                <div className='card-container'>
                    <CardHabitats />
                </div>
            </section>
            <section>
                <div className='container-title-text'>
                    <h2>Rencontrez nos résidents :</h2>
                    <p>Notre zoo abrite une grande variété d'animaux, des plus petits aux plus grands, tous soigneusement sélectionnés pour leur conservation et leur éducation.</p>
                </div>
                <div className='card-container'>
                    <CardAnimals />
                </div>
            </section>
            <section>
                <div className='container-title-text'>
                    <h2>Avis :</h2>
                </div>
                <div className='card-container'>
                    <CardReview />
                </div>
            </section>
        </main>
    </>
}