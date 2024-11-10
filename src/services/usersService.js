const users = [
    {
        id: 1,
        name:"Gerardo",
    },
    {
        id: 2,
        name: "Andreina",
    },
    {
        id: 3,
        name: "Naomi",
    },
    {
        id: 4,
        name: "Mathias",
    },
]

let id = 5;

module.exports = {
    getUsers: async () => {

        // Consultar una base de datos
        // Realizar una solicitud a un servicio externo
        // Leera la informacion de un archivo
        // Todas las anteriores sera asincronas, por ende retornaran una promesa que al resolverse nos dara la informacion requerida
        
        return users;
    }, 

    createUser: async (name) => {
        const newUser={
            id,
            name,
        };
        id++;
        users.push(newUser);
    }
};