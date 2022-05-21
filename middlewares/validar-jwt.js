const { response } = require("express");
const jwt = require("jsonwebtoken");


const validarJWT = (req, resp = response, next) => {

 const token = req.header("x-token");

 if (!token) {
     resp.status(401).json({
         ok: false,
         msg: "No se enconto el token en la peticion"
    })
 }
 try {
       
    const { email }  = jwt.verify(token, process.env.JWT_SECRET);
    // req.email = email;
    // console.log(email);

    next();


} catch (error) {
    return resp.status(401).json({
        ok:false,
        msg: "token no valido"
    })
    
}

}

module.exports = {
    validarJWT

}