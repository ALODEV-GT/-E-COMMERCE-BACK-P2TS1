const FechaGlobal = require("../models/FechaGlobal")

const getFechaActual = async (req, res) => {
  const fecha = await FechaGlobal.findOne({ id: "1" })
  res.json(fecha)
}

const cambiarFecha = async (req, res) => {
  const { fecha } = req.body;
  const resp = await FechaGlobal.updateOne({ id: "1" }, {
    $set: {
      fecha
    }
  });
  res.json(resp)
}

module.exports = {
  getFechaActual: getFechaActual,
  cambiarFecha: cambiarFecha
}

