const express = require("express");
const router = express.Router();
const productoController = require("../controllers/ProductoController");

router.get("/mis-productos/:nombreUsuario", productoController.getMisProductos)

router.get("/mis-productos-vendidos/:nombreUsuario", productoController.getMisProductosVendidos)

router.get("/productos-venta", productoController.getProductosVenta)

router.get("/productos-rechazados/:nombreUsuario", productoController.getProductosRechazados)

router.get("/listar-autorizaciones", productoController.getProductosAutorizar)

router.post("/agregar", productoController.agregarProducto)

router.put("/editar", productoController.editarProducto)

router.put("/autorizar", productoController.autorizarProducto)

router.delete("/eliminar-producto/:id", productoController.eliminarProducto)

router.get('/get-img-producto', productoController.getImgProducto)

router.post('/guardar-imagen', productoController.upload.single('imagen'), function (req, res) {
  const fileName = req.file.originalname;
  res.json('/img/productos/' + fileName);
});

module.exports = router;
