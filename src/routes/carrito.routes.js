const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/CarritoController");

router.post("/existe-tarjeta", carritoController.existeTarjeta)

router.post("/agregar-tarjeta", carritoController.agregarTarjeta)

router.get("/tarjetas/:usuario", carritoController.tarjetasUsuario)

router.post("/comprar", carritoController.comprar)

module.exports = router;
