const express = require("express");
const Usuario = require("../models/Usuario");
const router = express.Router();

router.get("/", async (req, res) => {
  const usuario = await Usuario.find();
  console.log(usuario);
  res.json(usuario)
})

module.exports = router;
