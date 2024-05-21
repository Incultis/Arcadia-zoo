export const dataUsers = [
    {
        id: 1,
        name: "José",
        email: "adminzoo@mail.com",
        password: "adminzoo",
        role: "ADMIN"
    },
    {
        id: 2,
        name: "Lucas",
        email: "employezoo@mail.com",
        password: "zoo",
        role: "WORKER"
    },
    {
        id: 3,
        name: "Victoria",
        email: "vetozoo@mail.com",
        password: "veto",
        role: "VETERINARY"
    }
]

//param: {number} id de l'utilisateur à extraire. Retourne un objet User.
export function getUserById(idUser) {
    return dataUsers.find(user => user.id === idUser);
}

