import styles from '../pages/styles/Page.module.css'
import MainImg from '../../assets/MainPictureAlt.png';
import broceliande from '../../assets/broceliande.jpg';
import { CardAnimals, CardHabitats, CardReview, CardServices } from '../Card';
import ButtonLink from '../ButtonLink';
import Section from '../shared/Section';
import HeadContent from '../shared/HeadContent';
import { dataAnimals } from '../../mockData/dataAnimals';

export default function Accueil() {


    return <>
        <main>
            <img src={MainImg} alt='présentation du zoo' className={styles.imgAccueil} />
            <div className={styles.containerHead}>
                <img src={broceliande} alt='présentation de broceliande' className={styles.resizeImg} />
                <HeadContent>
                    <h1>Bienvenue à Arcadia</h1>
                    <p>Fondé en 1960 et niché près de la mystique forêt de Brocéliande en Bretagne, Arcadia est bien plus qu'un simple zoo.</p>
                </HeadContent>
            </div>
            <Section background>
                <HeadContent>
                    <h2>Expériences immersives :</h2>
                    <p>Participez à nos visites guidées interactives et assistez à des présentations d'animaux en direct pour une expérience éducative passionnante.</p>
                </HeadContent>
                <div className={styles.cardContainer}>
                    <CardServices />
                </div>
                <ButtonLink>Découvrir nos services</ButtonLink>
            </Section>
            <Section>
                <HeadContent>
                    <h2>Découvrez nos habitats :</h2>
                    <p>Parcourez nos vastes habitats soigneusement aménagés pour offrir à chaque espèce un espace de vie naturel et stimulant.</p>
                </HeadContent>
                <div className={styles.cardContainer}>
                    <CardHabitats />
                </div>
                <ButtonLink>Découvrir nos Habitats</ButtonLink>
            </Section>
            <Section background>
                <HeadContent>
                    <h2>Rencontrez nos résidents :</h2>
                    <p>Notre zoo abrite une grande variété d'animaux, des plus petits aux plus grands, tous soigneusement sélectionnés pour leur conservation et leur éducation.</p>
                </HeadContent>
                <div className={styles.cardContainer}>
                    <CardAnimals arrayAnimals={dataAnimals} />
                </div>
                <ButtonLink>Découvrir les résidents</ButtonLink>
            </Section>
            <Section>
                <HeadContent>
                    <h2>Avis :</h2>
                </HeadContent>
                <div className={styles.cardContainer}>
                    <CardReview />
                </div>
                <ButtonLink>Parcourir les avis</ButtonLink>
            </Section>
        </main>
    </>
}