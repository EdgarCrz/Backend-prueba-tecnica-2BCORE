const { Router } = require("express");
const {inicio, validacionToken} = require("../controllers/inicio.controllers");
const { validarJWT } = require("../middlewares/validar-jwt");


const router = Router();


// CREAR RUTAS

router.post("/", inicio);
router.get("/", validarJWT,validacionToken);


module.exports = router;