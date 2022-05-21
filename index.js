const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");


const app = express();

// Configuracion de cors
app.use(cors());

// Coneccion con la base de datos
dbConnection();


app.use(express.static("public"));

app.use(express.json());

app.use("/api/registro", require("./routes/registro.routes"));
app.use("/api/inicio", require("./routes/inicio.routes"));


app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

const puerto = process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
