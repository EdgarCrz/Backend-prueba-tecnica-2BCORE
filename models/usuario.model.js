const { Schema, model } = require("mongoose"); // desestructuracion

const usuarioSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },

});

module.exports = model("Usuario", usuarioSchema);
