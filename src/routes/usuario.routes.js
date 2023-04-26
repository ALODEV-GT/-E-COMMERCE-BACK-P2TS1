const express = require("express");
const router = express.Router();
const userController = require("../controllers/UsuarioController");

router.get("/lista", userController.getUsuarios)

router.get("/usuario/:nombreUsuario", userController.getUsuario)

router.post("/agregar", userController.agregarUsuario)

router.delete("/eliminar/:usuario", userController.eliminarUsuario)

router.put("/actualizar/:usuarioActual", userController.actualizarUsuario)

module.exports = router;
