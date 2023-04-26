const Usuario = require("../models/Usuario")

const getUsuario = async (req, res) => {
  const { usuario, contrasena } = req.body;
  const user = await Usuario.findOne({ usuario, contrasena })
  if (user) {
    res.json({ nombre: user.nombre, usuario: user.usuario, contrasena: "", rol: user.rol })
  } else {
    res.json({ nombre: usuario, usuario: "", contrasena: "", rol: "ninguno" })
  }
}

module.exports = {
  getUsuario: getUsuario
}
