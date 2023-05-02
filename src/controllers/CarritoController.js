const Usuario = require("../models/Usuario")
const Orden = require("../models/Orden")
const Producto = require("../models/Producto")

const existeTarjeta = async (req, res) => {
  const { notarjeta } = req.body;
  const { usuario } = req.query

  const user = await Usuario.findOne({ usuario, 'tarjetas.notarjeta': notarjeta })
  if (user) {
    res.json(true)
  } else {
    res.json(false)
  }
}

const agregarTarjeta = async (req, res) => {
  const { usuario } = req.query
  const { notarjeta, cvv, fecha_expiracion, aleas } = req.body

  const resp = await Usuario.updateOne({ usuario }, {
    $push: {
      tarjetas: {
        notarjeta,
        cvv,
        fecha_expiracion,
        aleas
      }
    }
  });

  res.json(resp)
}

const tarjetasUsuario = async (req, res) => {
  const { usuario } = req.params;
  const user = await Usuario.findOne({ usuario });
  res.json(user.tarjetas)
}

const comprar = async (req, res) => {
  const { comprador_usuario, fecha_pedido, fecha_entrega, estado, productos, ganancia } = req.body
  const insertarOrden = new Orden({
    comprador_usuario,
    fecha_pedido,
    fecha_entrega,
    estado,
    productos,
    ganancia
  });

  nuevaOrden = await insertarOrden.save();

  //Cambiamos estado producto
  let prods = productos;
  prods.forEach(p => {
    let _id = p._id;
    let unidades = p.unidadesCompra;
    restarEnStock(_id, unidades)
  });

  res.json(true)
}

async function cambiarEstadoCompradoProducto(_id) {
  await Producto.updateOne({ "_id": _id }, {
    $set: {
      "solicitud.estado": "vendido",
    },
  });
}

async function restarEnStock(_id, unidades) {
  await Producto.updateOne({ "_id": _id }, {
    $inc: {
      stock: -unidades
    }
  });

  const producto = await Producto.findOne({ "_id": _id })
  if (producto.stock == 0) {
    cambiarEstadoCompradoProducto(_id)
  }
}

module.exports = {
  existeTarjeta: existeTarjeta,
  agregarTarjeta: agregarTarjeta,
  tarjetasUsuario: tarjetasUsuario,
  comprar: comprar
}
