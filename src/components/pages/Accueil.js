import styles from '../pages/styles/Page.module.css'
import MainImg from '../../assets/MainPictureAlt.png';
import broceliande from '../../assets/broceliande.jpg';
import { CardAnimals, CardHabitats, CardReview, CardServices } from '../Card';
import ButtonLink from '../ButtonLink';

export default function Accueil() {


    return <>
        <main>
            <img src={MainImg} alt='présentation du zoo' className={styles.imgAccueil} />
            <div className={styles.containerHead}>
                <img src={broceliande} alt='présentation de broceliande' className={styles.resizeImg} />
                <div className={styles.containerTitleText}>
                    <h1>Bienvenue à Arcadia</h1>
                    <p>Fondé en 1960 et niché près de la mystique forêt de Brocéliande en Bretagne, Arcadia est bien plus qu'un simple zoo.</p>
                </div>
            </div>
            <section className={styles.altBackground}>
                <div className={styles.containerTitleText}>
                    <h2>Expériences immersives :</h2>
                    <p>Participez à nos visites guidées interactives et assistez à des présentations d'animaux en direct pour une expérience éducative passionnante.</p>
                </div>
                <div className={styles.cardContainer}>
                    <CardServices />
                </div>
                <ButtonLink>Découvrir nos services</ButtonLink>
            </section>
            <section>
                <div className={styles.containerTitleText}>
                    <h2>Découvrez nos habitats :</h2>
                    <p>Parcourez nos vastes habitats soigneusement aménagés pour offrir à chaque espèce un espace de vie naturel et stimulant.</p>
                </div>
                <div className={styles.cardContainer}>
                    <CardHabitats />
                </div>
                <ButtonLink>Découvrir nos Habitats</ButtonLink>
            </section>
            <section className={styles.altBackground}>
                <div className={styles.containerTitleText}>
                    <h2>Rencontrez nos résidents :</h2>
                    <p>Notre zoo abrite une grande variété d'animaux, des plus petits aux plus grands, tous soigneusement sélectionnés pour leur conservation et leur éducation.</p>
                </div>
                <div className={styles.cardContainer}>
                    <CardAnimals />
                </div>
                <ButtonLink>Découvrir les résidents</ButtonLink>
            </section>
            <section>
                <div className={styles.containerTitleText}>
                    <h2>Avis :</h2>
                </div>
                <div className={styles.cardContainer}>
                    <CardReview />
                </div>
                <ButtonLink>Parcourir les avis</ButtonLink>
            </section>
        </main>
    </>
}