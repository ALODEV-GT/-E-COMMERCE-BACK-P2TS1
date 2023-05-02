const express = require("express");
const router = express.Router();
const reportesController = require("../controllers/ReportesController");

router.get("/top-productos-vendidos", reportesController.getTopProductosVendidos)

router.get("/top-clientes-ganancias", reportesController.getTopClientesGanancias)

router.get("/top-clientes-productos-vendidos", reportesController.getTopClientesProductosVendidos)

router.get("/top-clientes-pedidos", reportesController.getTopClientesPedidos)

router.get("/top-clientes-stock", reportesController.getTopClientesStock)

module.exports = router;
