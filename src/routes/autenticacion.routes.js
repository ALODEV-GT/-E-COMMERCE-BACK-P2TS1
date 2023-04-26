const express = require("express");
const router = express.Router();
const autenticacionController = require("../controllers/AutenticacionController");

router.post("/", autenticacionController.getUsuario)

module.exports = router;
