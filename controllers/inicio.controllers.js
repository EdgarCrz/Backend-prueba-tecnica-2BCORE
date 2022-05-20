const { response } = require("express");
const bcrypt = require("bcryptjs/dist/bcrypt");
const Usuario = require("../models/usuario.model");

const inicio = async (req, resp = response) => {
  console.log(req.body);
  const valor = req.body;

  const { email, password } = valor;

  try {
    const existeEmail = await Usuario.findOne({ email }); //crea una constante "existeEmail" y en el modelo Usuario "busca uno" filtramos por email(evitamos redundancia), y le pasamos el correo que nos estan mandando al hacer el GET

    if (!existeEmail) {
      return resp.status(400).json({
        ok: false,
        msg: "No existe el usuario registrado",
      });
    }

    const validPassword = bcrypt.compareSync(password, existeEmail.password); // esto devolvera un boleando que solo nos indicara si las contraseñas coinciden 
    if (!validPassword) {
      return resp.status(400).json({
        ok: false,
        msg: "Contraseña incorrecta",
      });
    }

    resp.json({
      ok: true,
      msg: "Bienvenido"
    });

  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  inicio,
};
