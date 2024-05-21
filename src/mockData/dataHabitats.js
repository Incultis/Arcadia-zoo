import savane from '../assets/habitat/savane.jpg';
import savane2 from '../assets/habitat/savane2.jpg';
import savane3 from '../assets/habitat/savane3.jpg';
import jungle from '../assets/habitat/jungle.jpg';
import jungle2 from '../assets/habitat/jungle2.jpg';
import jungle3 from '../assets/habitat/jungle3.jpg';
import aquatique from '../assets/habitat/aquatique.jpg';
import aquatique2 from '../assets/habitat/aquatique2.jpg';
import aquatique3 from '../assets/habitat/aquatique3.jpg';
import { dataAnimals } from './dataAnimals';
import { getListCommentary } from './dataCommentaireHabitat';

export const dataHabitats = [
    {
        id: 1,
        img: [savane, savane2, savane3],
        title: "Savane",
        description: "reproduction fidèle des vastes étendues herbeuses que l'on trouve dans les régions arides et tropicales d'Afrique et d'autres parties du monde. Cette zone est aménagée pour offrir un environnement spacieux et naturel à des animaux emblématiques de la savane, tels que les girafes, les zèbres, les antilopes, les éléphants, et parfois même des prédateurs comme les lions ou les guépards.",
        listAnimals: getListResident(dataAnimals, 1),
        get commentaire() {
            return getListCommentary(this.id);
        }
    },
    {
        id: 2,
        img: [jungle, jungle2, jungle3],
        title: "Jungle",
        description: "Des cascades et des étangs artificiels enrichissent cet environnement, offrant des habitats variés pour une diversité d'espèces animales telles que des oiseaux colorés, des primates agiles, des reptiles et des amphibiens.",
        listAnimals: getListResident(dataAnimals, 2),
        get commentaire() {
            return getListCommentary(this.id);
        }
    },
    {
        id: 3,
        img: [aquatique, aquatique2, aquatique3],
        title: "Aquatique",
        description: "Les visiteurs peuvent explorer des habitats marins diversifiés, avec des zones représentant des récifs coralliens colorés, des mangroves côtières, ou encore des lacs et des étangs abritant une multitude de créatures aquatiques.",
        listAnimals: getListResident(dataAnimals, 3),
        get commentaire() {
            return getListCommentary(this.id);
        }
    }
];
// param: {sting} nom de l'habitat
export function getHabitatByName(name) {
    return dataHabitats.find(habitat => habitat.title === name);

}
// param: {array} tableau d'objet représentant les animaux, {num} identifiant habitat, retourn un tableau
function getListResident(listAnimals, idHabitat) {
    return listAnimals.filter(animal => animal.habitat === idHabitat);

}

//param: {number} id de l'habitat à extraire. Retourne un objet habitat.
export function getHabitatById(idHabitat) {
    return dataHabitats.find(habitat => habitat.id === idHabitat);
}
