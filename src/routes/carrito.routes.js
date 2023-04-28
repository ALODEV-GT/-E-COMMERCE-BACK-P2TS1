const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/CarritoController");

// router.get("/lista", carritoController.getUsuarios)

//router.get("/mis-productos/:nombreUsuario", carritoController.getMisProductos)

//router.get("/listar-autorizaciones", carritoController.getProductosAutorizar)

router.post("/existe-tarjeta", carritoController.existeTarjeta)

router.post("/agregar-tarjeta", carritoController.agregarTarjeta)

router.get("/tarjetas/:usuario", carritoController.tarjetasUsuario)

router.post("/comprar", carritoController.comprar)

//router.put("/autorizar", carritoController.autorizarProducto)

// router.delete("/eliminar/:usuario", carritoController.eliminarUsuario)


module.exports = router;
