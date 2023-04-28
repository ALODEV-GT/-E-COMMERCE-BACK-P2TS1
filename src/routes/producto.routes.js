const express = require("express");
const router = express.Router();
const productoController = require("../controllers/ProductoController");

// router.get("/lista", productoController.getUsuarios)

router.get("/mis-productos/:nombreUsuario", productoController.getMisProductos)

router.get("/productos-venta", productoController.getProductosVenta)

router.get("/listar-autorizaciones", productoController.getProductosAutorizar)

router.post("/agregar", productoController.agregarProducto)

router.put("/autorizar", productoController.autorizarProducto)

// router.delete("/eliminar/:usuario", productoController.eliminarUsuario)


module.exports = router;
