const { Router } = require("express");
const {registro} = require("../controllers/registro.controllers");


const router = Router();


// CREAR RUTAS

router.post("/", registro);


module.exports = router;