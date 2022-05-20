const { response} = require("express");




const inicio = async (req, resp = response) => {

  try {
    resp.json({
      ok:true,
      msg:"Inicio"
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
  inicio,
};
