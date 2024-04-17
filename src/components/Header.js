import logo from "../assets/logoalt.png";
export default function Header() {

    return <header>
        <img src={logo} alt="Logo du zoo" className="logo" />
        <nav>
            <ul className="nav-style">
                <li>Accueil</li>
                <li>Services</li>
                <li>Habitats</li>
                <li>Contact</li>
                <li>Connexion Pro</li>
            </ul>
        </nav>
    </header>
}