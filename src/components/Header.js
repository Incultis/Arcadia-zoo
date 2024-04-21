import logo from "../assets/logoalt.png";
import menu from '../assets/list.svg';
import cross from '../assets/close.svg';
import { useScreenWidth } from "../hooks/useScreenWidth";
import { useState } from "react";

function Nav() {
    //State pour switch l'icone du menu 
    const [image, setImage] = useState(menu);
    // hook personnalisé pour retourner la largeur de l'écran
    const { widthScreen } = useScreenWidth();
    //event de click sur l'icone menu/cross
    const handleClick = (e) => {
        setImage(image === menu ? cross : menu);
        e.target.nextSibling.style.display === 'none' ?
            e.target.nextSibling.style.display = 'block' :
            e.target.nextSibling.style.display = 'none';

    }

    // A faire/revoir: composant propre à la liste ? avec condition d'affichage directement dans le header.
    if (widthScreen <= 760) {
        return <>
            <img src={image} alt="icone de menu" onClick={handleClick} className="menu-list" />
            <nav style={{ display: "none" }}>
                <ul className="nav-style">
                    <li>Accueil</li>
                    <li>Services</li>
                    <li>Habitats</li>
                    <li>Contact</li>
                    <li>Connexion Pro</li>
                </ul>
            </nav>
        </>
    } else {
        return <>
            <nav >
                <ul className="nav-style">
                    <li>Accueil</li>
                    <li>Services</li>
                    <li>Habitats</li>
                    <li>Contact</li>
                    <li>Connexion Pro</li>
                </ul>
            </nav>
        </>
    }
}

export default function Header() {




    return <header>
        <img src={logo} alt="Logo du zoo" className="logo" />
        <Nav />

    </header>
}