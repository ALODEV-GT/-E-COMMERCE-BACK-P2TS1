const express = require("express");
const router = express.Router();
const ordenController = require("../controllers/OrdenController");

router.get("/mis-pedidos-pendientes/:nombreUsuario", ordenController.getMisPedidosPendientes)

router.get("/mis-pedidos-entregados/:nombreUsuario", ordenController.getMisPedidosEntregados)

router.get("/pedidos-pendientes", ordenController.getPedidosPendientes)

router.put("/entregar-pedido", ordenController.entregarPedido)

router.put("/cambiar-fecha-entrega", ordenController.cambiarFechaEntrega)

module.exports = router;
