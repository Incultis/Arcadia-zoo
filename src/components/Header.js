import logo from "../assets/logoalt.png";
import menu from '../assets/list.svg'
import { useScreenWidth } from "../hooks/useScreenWidth";

function Nav({ event }) {
    const { widthScreen } = useScreenWidth();

    if (widthScreen <= 760) {
        return <>
            <img src={menu} alt="icone de menu" onClick={event} className="menu-list" />
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

    const handleClick = (e) => {

        e.target.nextSibling.style.display === 'none' ?
            e.target.nextSibling.style.display = 'block' :
            e.target.nextSibling.style.display = 'none';

    }


    return <header>
        <img src={logo} alt="Logo du zoo" className="logo" />
        <Nav event={handleClick} />

    </header>
}