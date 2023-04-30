const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const fechaGlobalSchema = new Schema({
  id: String,
  fecha: Date
});


module.exports = model("fecha_globales", fechaGlobalSchema);
