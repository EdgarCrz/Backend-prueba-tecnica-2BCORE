const { Router } = require("express");
const {inicio} = require("../controllers/inicio.controllers");


const router = Router();


// CREAR RUTAS

router.post("/", inicio);


module.exports = router;