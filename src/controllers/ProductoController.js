const Producto = require("../models/Producto")
const Orden = require("../models/Orden")
const multer = require('multer');

const getMisProductos = async (req, res) => {
  const { nombreUsuario } = req.params;
  const productos = await Producto.find(
    {
      "solicitud.estado": { $in: ["pendiente", "aceptado"] },
      usuario: nombreUsuario
    });
  res.json(productos)
}

const getMisProductosVendidos = async (req, res) => {
  const { nombreUsuario } = req.params;
  const ordenes = await Orden.find(
    {
      "productos.usuario": nombreUsuario
    });


  //Enviar solo productos vendidos por este usuario
  let productos = [];
  ordenes.forEach(ord => {
    let prods = ord.productos;
    prods.forEach(prod => {
      if (prod.usuario == nombreUsuario) {
        productos.push(prod)
      }
    });
  });

  res.json(productos)
}

const getProductosVenta = async (req, res) => {
  const { clave } = req.query;

  if (clave) {
    const productos = await Producto.find(
      {
        $and: [
          { nombre: { $regex: new RegExp('^' + clave, "i") } },
          { "solicitud.estado": "aceptado" }
        ]
      });
    res.json(productos)
  } else {
    const productos = await Producto.find(
      {
        "solicitud.estado": "aceptado"
      });
    res.json(productos)
  }

}

const getProductosAutorizar = async (req, res) => {
  const productos = await Producto.find({ "solicitud.estado": "pendiente" });
  res.json(productos)
}

const agregarProducto = async (req, res) => {
  const { usuario, nombre, descripcion, imagen, precio, categoria, stock, solicitud } = req.body;
  const insertarProducto = new Producto({
    usuario,
    nombre,
    descripcion,
    imagen,
    precio,
    categoria,
    stock,
    solicitud
  });

  nuevoProducto = await insertarProducto.save();

  res.json(nuevoProducto)
}

const autorizarProducto = async (req, res) => {
  const { _id, solicitud } = req.body;
  const resp = await Producto.updateOne({ "_id": _id }, {
    $set: {
      "solicitud.estado": solicitud.estado
    }
  });

  res.json(resp)
}

const getProductosRechazados = async (req, res) => {
  const { nombreUsuario } = req.params;

  const productos = await Producto.find(
    {
      "solicitud.estado": "rechazado",
      usuario: nombreUsuario
    });
  res.json(productos)
}

const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  const prod = await Producto.deleteOne({ "_id": id })
  res.json(prod)
}

const editarProducto = async (req, res) => {
  const { _id, nombre, descripcion, imagen, precio, categoria, stock, solicitud } = req.body;
  const resp = await Producto.updateOne({ "_id": _id }, {
    $set: {
      nombre,
      descripcion,
      imagen,
      precio,
      categoria,
      stock,
      solicitud
    }
  });
  res.json(resp)

}

const getImgProducto = async (req, res) => {
  res.set('Content-Type', 'image/jpg');
  const url = req.query.url
  res.sendFile(__dirname + url);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/controllers/img/productos');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage })


module.exports = {
  agregarProducto: agregarProducto,
  getMisProductos: getMisProductos,
  getProductosAutorizar: getProductosAutorizar,
  autorizarProducto: autorizarProducto,
  getProductosVenta: getProductosVenta,
  getProductosRechazados: getProductosRechazados,
  eliminarProducto: eliminarProducto,
  editarProducto: editarProducto,
  getMisProductosVendidos: getMisProductosVendidos,
  upload: upload,
  getImgProducto: getImgProducto
}
