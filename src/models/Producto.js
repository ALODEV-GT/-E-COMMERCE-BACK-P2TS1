const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const productoSchema = new Schema({
  usuario: String,
  nombre: String,
  descripcion: String,
  imagen: String,
  precio: Number,
  categoria: String,
  stock: Number,
  unidadesCompra: Number,
  solicitud: {
    fecha_solicitud: Date,
    estado: String
  }
});


module.exports = model("productos", productoSchema);
