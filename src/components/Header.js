import logo from "../assets/logoalt.png";
import menu from '../assets/list.svg';
import cross from '../assets/close.svg';
import { useScreenWidth } from "../hooks/useScreenWidth";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
    //State pour switch l'icone du menu 
    const [image, setImage] = useState(menu);
    //Variable de la location courante
    const location = useLocation();


    //effect qui réinitialise le menu dès que la location change en format écran moyen
    useEffect(() => {
        if (widthScreen <= 760) {
            document.querySelector("nav").style.display = "none";
            setImage(menu);
        }

    }, [location])
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
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/habitats">Habitats</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/connexion">Connexion Pro</NavLink></li>
                </ul>
            </nav>
        </>
    } else {
        return <>
            <nav >
                <ul className="nav-style">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/habitats">Habitats</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/connexion">Connexion Pro</NavLink></li>
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