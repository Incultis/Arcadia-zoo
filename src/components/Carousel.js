import { useEffect, useState } from 'react';
import styles from '../components/pages/styles/Carousel.module.css'
import dot from "../assets/dot.svg"
import dotAlt from "../assets/dotAlt.svg"
import arrowRight from "../assets/arrow-right.svg"

// param: {array}: tableau d'images
export default function Carousel({ arrayImg }) {
    //State qui indique la position de l'image active dans le tableau d'images
    const [activeIndex, setActiveIndex] = useState(0);
    //tableau pour la navigation de la galerie
    const dots = [];
    //useEffect qui réinitialise l'index pour repartir à la première image du tableau quand le tableau d'images change.
    useEffect(() => {
        setActiveIndex(0)
    }, [arrayImg])
    // fonction event click pour passer à l'image suivant. Si pas d'image suivante revient à la première
    const nextSlide = () => {
        setActiveIndex(activeIndex === arrayImg.length - 1 ? 0 : activeIndex + 1)
    }
    // fonction event click pour passer à l'image précédente. Si pas d'image précédente passe à la dernière.
    const previousSlide = () => {
        setActiveIndex(activeIndex === 0 ? arrayImg.length - 1 : activeIndex - 1)
    }
    // map du tableau reçu en props + construction du tableau de "dots" pour la navigation de la galerie
    const listImg = arrayImg.map((img, index) => {
        dots.push(`${index === activeIndex ? dot : dotAlt}`)
        return <li key={index} className={`${styles.styleLi} ${index === activeIndex ? styles.active : ""}`}>
            <img src={img} alt="" className={styles.imgCarousel} />
        </li>
    })
    //fonction event click sur la barre "dot", attribut l'index cible du click à l'activeIndex
    const handleClick = (e) => {
        setActiveIndex(Number(e.currentTarget.dataset.current))
    }


    return <div className={styles.containerCarousel}>
        <ul className={styles.styleUl}>
            {listImg}
        </ul>
        <p className={styles.listDot}>{dots.map((dot, index) => {
            return <img key={index} alt='' data-current={index} src={dot} onClick={handleClick} />


        })}
        </p>
        <img src={arrowRight} alt='next' className={styles.btnD} onClick={nextSlide} />
        <img src={arrowRight} alt='previous' className={styles.btnG} onClick={previousSlide} />
    </div>
}