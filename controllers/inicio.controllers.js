const { response } = require("express");
const bcrypt = require("bcryptjs/dist/bcrypt");
const Usuario = require("../models/usuario.model");
const { generarJWT } = require("../helpers/jwt");

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

    const token = await generarJWT(email);

    resp.json({
      ok: true,
      msg: "Bienvenido",
      token
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const validacionToken = async (req, resp = response) => {

  resp.json({
    ok:true,
    msg: "token validado"
  })
  // const email = req.email;
  // // Generar el TOKEN - JWT
  // const token = await generarJWT(uid); // si el usuario ya existia, quiere decir que ya tiene un id, entonces lo usamos para generat el jwt. en caso de que sea la primera vez que entra, en el paso anterior,al guardarlo en automatico tambien se le genera un token
  // res.json({
  //   ok: true,
  //   token,
  // });
};

module.exports = {
  inicio,
  validacionToken
};
