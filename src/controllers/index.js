// aca estan las funciones que establecen la logica de negocio

const testController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud");
};

module.exports = {
    testController,
};