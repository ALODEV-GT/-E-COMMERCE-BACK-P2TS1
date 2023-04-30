const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ordenSchema = new Schema({
  comprador_usuario: String,
  fecha_pedido: Date,
  fecha_entrega: Date,
  estado: String,
  productos: [{
    usuario: String,
    nombre: String,
    descripcion: String,
    imagen: String,
    precio: Number,
    categoria: String,
    stock: Number,
    unidadesCompra: Number,
    fechaCompra: Date,
    solicitud: {
      fecha_solicitud: Date,
      estado: String
    }
  }],
  ganancia: {
    ganancia_usuario: Number,
    ganancia_empresa: Number
  }
});


module.exports = model("ordenes", ordenSchema);
