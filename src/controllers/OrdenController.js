const Orden = require("../models/Orden")

const getMisPedidosPendientes = async (req, res) => {
  const { nombreUsuario } = req.params;
  const ordenes = await Orden.find(
    {
      estado: "pendiente",
      comprador_usuario: nombreUsuario
    });
  res.json(ordenes)
}

const getMisPedidosEntregados = async (req, res) => {
  const { nombreUsuario } = req.params;
  const ordenes = await Orden.find(
    {
      estado: "entregado",
      comprador_usuario: nombreUsuario
    });
  res.json(ordenes)
}

const getPedidosPendientes = async (req, res) => {
  const ordenes = await Orden.find(
    {
      estado: "pendiente"
    });
  res.json(ordenes)
}

const entregarPedido = async (req, res) => {
  const { _id } = req.body;
  const resp = await Orden.updateOne({ "_id": _id }, {
    $set: {
      estado: "entregado"
    }
  });
  res.json(resp)
}

const cambiarFechaEntrega = async (req, res) => {
  const { _id, fecha_entrega } = req.body;
  const resp = await Orden.updateOne({ "_id": _id }, {
    $set: {
      fecha_entrega
    }
  });
  res.json(resp)
}

module.exports = {
  getMisPedidosPendientes: getMisPedidosPendientes,
  getMisPedidosEntregados: getMisPedidosEntregados,
  getPedidosPendientes: getPedidosPendientes,
  entregarPedido: entregarPedido,
  cambiarFechaEntrega: cambiarFechaEntrega
}

