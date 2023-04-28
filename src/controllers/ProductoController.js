const Producto = require("../models/Producto")

const getMisProductos = async (req, res) => {
  const { nombreUsuario } = req.params;
  const productos = await Producto.find(
    {
      "solicitud.estado": { $in: ["vendido", "aceptado"] },
      usuario: nombreUsuario
    });
  res.json(productos)
}

const getProductosVenta = async (req, res) => {
  const productos = await Producto.find(
    {
      "solicitud.estado": "aceptado"
    });
  res.json(productos)
}

const getProductosAutorizar = async (req, res) => {
  const productos = await Producto.find({ "solicitud.estado": "pendiente" });
  res.json(productos)
}

const agregarProducto = async (req, res) => {
  const { usuario, nombre, descripcion, imagen, precio, categoria, stock, solicitud } = req.body;
  const insertarProducto = new Producto({
    usuario,
    nombre,
    descripcion,
    imagen,
    precio,
    categoria,
    stock,
    solicitud
  });

  nuevoProducto = await insertarProducto.save();

  res.json(nuevoProducto)
}

const autorizarProducto = async (req, res) => {
  const { _id, solicitud } = req.body;
  const resp = await Producto.updateOne({ "_id": _id }, {
    $set: {
      "solicitud.estado": solicitud.estado
    }
  });

  res.json(resp)
}


module.exports = {
  agregarProducto: agregarProducto,
  getMisProductos: getMisProductos,
  getProductosAutorizar: getProductosAutorizar,
  autorizarProducto: autorizarProducto,
  getProductosVenta: getProductosVenta
}
