const express = require("express");
const router = express.Router();
const fechaGlobalController = require("../controllers/FechaGlobalController");

router.get("/fecha-actual", fechaGlobalController.getFechaActual)

router.put("/cambiar", fechaGlobalController.cambiarFecha)

module.exports = router;
