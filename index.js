const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");


const app = express();

// Configuracion de cors
app.use(cors());

// Coneccion con la base de datos
// dbConnection();


app.use("/api/inicio", require("./routes/inicial.routes"));

const puerto = process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
