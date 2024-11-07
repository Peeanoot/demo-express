// definiremos las rutas que usaremos para comunicarnos

const { Router } = require("express");
const { testController } = require("../controllers/")

const router = Router();

router.get("/", testController);

module.exports = router;

