
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

//Rutas
const usuarioRoutes = require("./routes/usuario.routes")

//configuracion express
const app = express()
const puerto = 3000;
app.use(express.json())

//configuracion cors
app.use(cors());


//Conexion a la base de datos
async function conexion() {
  try {
    const db = await mongoose.connect('mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    });
    console.log('conectado a la base de datos: ', db.connection.name)
  } catch (error) {
    console.log(error)
  }
}

conexion()

app.use("/api", usuarioRoutes)

//Puerto del servidor
app.listen(puerto, () => { console.log("puerto: " + puerto); })
