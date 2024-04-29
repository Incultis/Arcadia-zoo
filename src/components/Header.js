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
    // hook personnalisé pour retourner la largeur de l'écran
    const { isMediumScreen } = useScreenWidth(); // test du widthScreen à supp

    //effect qui réinitialise le menu dès que la location change en format écran moyen
    useEffect(() => {
        if (isMediumScreen) {
            document.querySelector("nav").style.display = "none";
            setImage(menu);
        }
    }, [location, isMediumScreen]);

    //event de click sur l'icone menu/cross
    const handleClick = (e) => {
        setImage(image === menu ? cross : menu);
        e.target.nextSibling.style.display === 'none' ?
            e.target.nextSibling.style.display = 'block' :
            e.target.nextSibling.style.display = 'none';

    }
    return <>
        {isMediumScreen && <img src={image} alt="icone de menu" onClick={handleClick} className="menu-list" />}
        <nav style={isMediumScreen ? { display: "none" } : { display: "block" }}>
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

export default function Header() {

    return <header>
        <NavLink to="/"><img src={logo} alt="Logo du zoo" className="logo" /></NavLink>
        <Nav />
    </header>
}