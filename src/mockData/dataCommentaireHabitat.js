

export const dataCommentaireHabitat = [
    {
        id: 1,
        avis: "avis habitat savane",
        detail: "detail habitat",
        editBy: 3,
        habitat: 1
    },
    {
        id: 2,
        avis: "avis habitat jungle",
        detail: "detail habitat",
        editBy: 3,
        habitat: 2
    },
    {
        id: 3,
        avis: "avis habitat aquatique",
        detail: "detail habitat",
        editBy: 3,
        habitat: 3
    },
    {
        id: 4,
        avis: "avis habitat jungle 2",
        detail: "detail habitat",
        editBy: 3,
        habitat: 2
    }
]
// retourne les commentaires d'un habitat à partir de son id
export function getListCommentary(idHabitat) {
    return dataCommentaireHabitat.filter(commentary => commentary.habitat === idHabitat);
}