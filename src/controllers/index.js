// aca estan las funciones que establecen la logica de negocio

const userController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud para obtener datos de usuarios");
};

const postController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud para obtener datos de posts");
}

module.exports = {
    userController,
    postController,
};