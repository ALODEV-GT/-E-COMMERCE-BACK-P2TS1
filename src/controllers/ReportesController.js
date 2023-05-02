const Orden = require("../models/Orden")
const Producto = require("../models/Producto")

const getTopProductosVendidos = async (req, res) => {
  const fechaInicial = new Date(req.query.fechaInicial)
  const fechaFinal = new Date(req.query.fechaFinal)
  const reporte = await Orden.aggregate(
    [
      {
        $match: {
          fecha_pedido: {
            $gte: fechaInicial,
            $lte: fechaFinal,
          }
        }
      },
      {
        $unwind: "$productos" // Separar cada elemento del array de productos en documentos separados
      },
      {
        $group: {
          _id: { nombre: "$productos.nombre" }, // Agrupar por el nombre del producto
          unidadesTotales: { $sum: "$productos.unidadesCompra" } // Sumar las unidades de cada producto
        }
      },
      {
        $sort:
        {
          ganancia: -1
        }
      },
      {
        $limit: 10
      }
    ]
  )

  res.json(reporte)
}

const getTopClientesGanancias = async (req, res) => {
  const fechaInicial = new Date(req.query.fechaInicial)
  const fechaFinal = new Date(req.query.fechaFinal)
  const reporte = await Orden.aggregate(
    [
      {
        $match: {
          fecha_pedido: {
            $gte: fechaInicial,
            $lte: fechaFinal,
          }
        }
      },
      {
        $unwind: "$productos" // Separar cada elemento del array de productos en documentos separados
      },
      {
        $group: {
          _id: { vendedor: "$productos.usuario" }, // Agrupar por el nombre del producto
          ganancia: { $sum: "$productos.ganancia.ganancia_usuario" } // Sumar las unidades de cada producto
        }
      },
      {
        $sort:
        {
          ganancia: -1
        }
      },
      {
        $limit: 5
      }
    ]
  )
  res.json(reporte)
}

const getTopClientesProductosVendidos = async (req, res) => {
  const fechaInicial = new Date(req.query.fechaInicial)
  const fechaFinal = new Date(req.query.fechaFinal)
  const reporte = await Orden.aggregate(
    [
      {
        $match: {
          fecha_pedido: {
            $gte: fechaInicial,
            $lte: fechaFinal,
          }
        }
      },
      {
        $unwind: "$productos" // Separar cada elemento del array de productos en documentos separados
      },
      {
        $group: {
          _id: { vendedor: "$productos.usuario" }, // Agrupar por el nombre del producto
          unidadesTotales: { $sum: "$productos.unidadesCompra" } // Sumar las unidades de cada producto
        }
      },
      {
        $sort:
        {
          unidadesTotales: -1
        }
      },
      {
        $limit: 5
      }
    ]
  )
  res.json(reporte)
}

const getTopClientesPedidos = async (req, res) => {
  const fechaInicial = new Date(req.query.fechaInicial)
  const fechaFinal = new Date(req.query.fechaFinal)
  const reporte = await Orden.aggregate(
    [
      {
        $match: {
          fecha_pedido: {
            $gte: fechaInicial,
            $lte: fechaFinal,
          }
        }
      },
      {
        $group: {
          _id: { comprador: "$comprador_usuario" }, // Agrupar por el nombre del producto
          pedidos: { $sum: 1 } // Sumar las unidades de cada producto
        }
      },
      {
        $sort:
        {
          pedidos: -1
        }
      },
      {
        $limit: 5
      }
    ]
  )
  res.json(reporte)
}

const getTopClientesStock = async (req, res) => {
  const fechaInicial = new Date(req.query.fechaInicial)
  const fechaFinal = new Date(req.query.fechaFinal)
  const reporte = await Producto.aggregate(
    [
      {
        $match: {
          "solicitud.fecha_solicitud": {
            $gte: fechaInicial,
            $lte: fechaFinal
          },
          "solicitud.estado": "aceptado"
        }
      },
      {
        $group: {
          _id: "$usuario",
          stockTotal: { $sum: "$stock" }
        }
      },
      {
        $sort:
        {
          stockTotal: -1
        }
      },
      {
        $limit: 10
      }
    ]
  )
  res.json(reporte)
}

module.exports = {
  getTopProductosVendidos: getTopProductosVendidos,
  getTopClientesGanancias: getTopClientesGanancias,
  getTopClientesProductosVendidos: getTopClientesProductosVendidos,
  getTopClientesPedidos: getTopClientesPedidos,
  getTopClientesStock: getTopClientesStock
}

