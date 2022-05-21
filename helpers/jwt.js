const jwt = require("jsonwebtoken");

const generarJWT = (email) => {
  return new Promise((resolve, reject) => {
    const payload = {
      email,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "5m",
      },
      (err, token) => {
        if (err) {
          reject("No se pudo generar el Jwt");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
