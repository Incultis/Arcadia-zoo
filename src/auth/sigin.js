import { redirect } from "react-router-dom";
import { dataUsers } from "../mockData/dataUsers";

// simulation de connexion et gestion des rôles
//mise en place d'un sessionStorage pour simulé un compte connecté qui aura comme valeur un rôle.

// data: {object}
export function checkCredentials(dataForm) {
    const checkUser = dataUsers.find(user => user.email === dataForm.email && user.password === dataForm.password);
    if (checkUser) {
        console.log("Bienvenue !", checkUser.name);
        sessionStorage.setItem("logged", checkUser.role);
        window.location.reload();
    } else {
        alert("Identifiant incorrect"); //temporaire 
    }
}

//fonction de redirection de la page connexion vers le tableau de bord si l'utilisateur est connecté.
export function loader() {
    const role = sessionStorage.getItem("logged");
    if (role) {
        return redirect("/dashboard");
    } else {
        return null;
    }
}
// retourne le role {string} ou null
export function isLogged() {
    const role = sessionStorage.getItem("logged");
    if (role) {
        return role;
    } else {
        return null;
    }
}
// supprime la session
export function disconnect() {
    sessionStorage.removeItem("logged");
}