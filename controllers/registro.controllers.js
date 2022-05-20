const { response} = require("express");
const bcrypt = require("bcryptjs/dist/bcrypt");

const Usuario = require("../models/usuario.model");





const registro = async (req, resp = response) => {

  console.log(req.body);
  const valor = req.body;

  const {email, password} = valor;


  try {
    const existeEmail = await Usuario.findOne({email}) //crea una constante "existeEmail" y en el modelo Usuario "busca uno" filtramos por email(evitamos redundancia), y le pasamos el correo que nos estan mandando al hacer el GET

    if (existeEmail) {
      return resp.status(400).json({
        ok: false,
        msg: "El correo ya esta registrado",
      });
    }

    const usuario = new Usuario(req.body)


    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();


    resp.json({
      ok:true,
      email,
      password
    })
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }

};

module.exports = {
    registro,
};
