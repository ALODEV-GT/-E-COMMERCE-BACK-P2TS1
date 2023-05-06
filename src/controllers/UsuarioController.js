const Usuario = require("../models/Usuario")

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
}

const getUsuario = async (req, res) => {
  const { nombreUsuario } = req.params;
  const usuario = await Usuario.findOne({ usuario: nombreUsuario })
  res.json(usuario)
}

const getPassUsuario = async (req, res) => {
  const { nombreUsuario } = req.params;
  const usuario = await Usuario.findOne({ usuario: nombreUsuario })
  res.json(usuario.contrasena)
}

const agregarUsuario = async (req, res) => {
  const { nombre, usuario, contrasena, rol } = req.body;
  const insertarUsuario = new Usuario({
    nombre,
    usuario,
    contrasena,
    rol
  });

  nuevoUsuario = await insertarUsuario.save();

  res.json(nuevoUsuario)
}

const eliminarUsuario = async (req, res) => {
  const { usuario } = req.params;

  const user = await Usuario.deleteOne({
    usuario: usuario
  })

  res.json(user)
}

const actualizarUsuario = async (req, res) => {
  const { usuarioActual } = req.params;
  const { nombre, usuario, contrasena, rol } = req.body;
  const user = await Usuario.updateOne({ usuario: usuarioActual }, {
    $set: {
      nombre,
      usuario,
      contrasena,
      rol
    }
  });

  res.json(user)
}


module.exports = {
  getUsuarios: getUsuarios,
  getUsuario: getUsuario,
  agregarUsuario: agregarUsuario,
  eliminarUsuario: eliminarUsuario,
  actualizarUsuario: actualizarUsuario,
  getPassUsuario: getPassUsuario
}
