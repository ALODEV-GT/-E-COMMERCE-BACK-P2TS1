const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const usuarioSchema = new Schema({
  nombre: String,
  usuario: String,
  contrasena: String,
  rol: String
});


module.exports = model("usuarios", usuarioSchema);
