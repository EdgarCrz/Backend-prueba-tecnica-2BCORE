const { Router } = require("express");
const {inicio} = require("../controllers/inicial.controllers");


const router = Router();


// CREAR RUTAS

router.get("/", inicio);


module.exports = router;