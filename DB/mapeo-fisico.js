//use ecommerce

//------------ ELIMINACION DE COLECCIONES ------------
db.usuarios.drop()
db.ordenes.drop()
db.productos.drop()
db.fecha_globales.drop()

//------------ CREACION DE LAS COLECCIONES ------------
db.createCollection("usuarios")
db.createCollection("ordenes")
db.createCollection("productos")
db.createCollection("fecha_globales")


//------------ INSERCION DE USUARIOS ------------

// ADMINISTRADORES:
db.usuarios.insertOne(
  {
    "nombre": "Luis Hernandez",
    "usuario": "admin",
    "contrasena": "admin",
    "rol": "administrador"
  }
)

// PAQUETERIA:
db.usuarios.insertMany([
  {
    "nombre": "Juan Garcia",
    "usuario": "paqueteria1",
    "contrasena": "paqueteria1",
    "rol": "paqueteria"
  },
  {
    "nombre": "Maria Rodriguez",
    "usuario": "paqueteria2",
    "contrasena": "paqueteria2",
    "rol": "paqueteria"
  }
])

// COMUNES:
db.usuarios.insertMany([
  {
    "nombre": "Ana Perez",
    "usuario": "comun1",
    "contrasena": "comun1",
    "rol": "comun"
  },
  {
    "nombre": "Carlos Martinez",
    "usuario": "comun2",
    "contrasena": "comun2",
    "rol": "comun"
  },
  {
    "nombre": "Laura Sanchez",
    "usuario": "comun3",
    "contrasena": "comun3",
    "rol": "comun"
  },
  {
    "nombre": "Javier Gomez",
    "usuario": "comun4",
    "contrasena": "comun4",
    "rol": "comun"
  },
  {
    "nombre": "Melissa Gonzales",
    "usuario": "comun5",
    "contrasena": "comun5",
    "rol": "comun"
  },
])

//------------ INSERCION DE LA FECHA GLOBAL ------------
db.fecha_globales.insertOne({
  id: "1",
  fecha: ISODate("2023-04-27T00:00:00Z")
})

//------------ INSERCION DE PRODUCTOS ------------
db.productos.insertMany([
  {
    "usuario": "comun1",
    "nombre": "Lapiz",
    "descripcion": "Lapiz comun de grafito para escribir o dibujar.",
    "imagen": "/img/productos/Lapiz.jpg",
    "precio": 75.41,
    "categoria": "Academico",
    "stock": 39,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Boligrafo",
    "descripcion": "Boligrafo de tinta azul para escribir con precision.",
    "imagen": "/img/productos/Boligrafo.jpg",
    "precio": 59.97,
    "categoria": "Academico",
    "stock": 17,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Libreta",
    "descripcion": "Libreta de anillas con hojas blancas para tomar notas.",
    "imagen": "/img/productos/Libreta.jpg",
    "precio": 145.21,
    "categoria": "Academico",
    "stock": 48,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Cuaderno",
    "descripcion": "Cuaderno con espiral y hojas blancas rayadas para apuntes.",
    "imagen": "/img/productos/Cuaderno.jpg",
    "precio": 285.57,
    "categoria": "Academico",
    "stock": 22,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Agenda",
    "descripcion": "Agenda de planificacion semanal con tapa dura y marcador de pagina.",
    "imagen": "/img/productos/Agenda.jpg",
    "precio": 215.35,
    "categoria": "Academico",
    "stock": 32,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Calendario",
    "descripcion": "Calendario de pared con imagenes y dias festivos marcados.",
    "imagen": "/img/productos/Calendario.jpg",
    "precio": 83.15,
    "categoria": "Academico",
    "stock": 48,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Reloj",
    "descripcion": "Reloj analogico con correa de metal para uso diario.",
    "imagen": "/img/productos/Reloj.jpg",
    "precio": 88.58,
    "categoria": "Tecnologia",
    "stock": 26,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Mesa",
    "descripcion": "Mesa de centro de madera con estante inferior para almacenamiento.",
    "imagen": "/img/productos/Mesa.jpg",
    "precio": 280.99,
    "categoria": "Hogar",
    "stock": 39,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Silla",
    "descripcion": "Silla de comedor con tapizado de tela y patas de madera.",
    "imagen": "/img/productos/Silla.jpg",
    "precio": 257.35,
    "categoria": "Hogar",
    "stock": 26,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun1",
    "nombre": "Sofa",
    "descripcion": "Sofa de 3 plazas con tapiceria de tela y cojines de espuma.",
    "imagen": "/img/productos/Sofa.jpg",
    "precio": 234.32,
    "categoria": "Hogar",
    "stock": 33,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Lampara",
    "descripcion": "Lampara de mesa de diseño moderno con luz LED regulable.",
    "imagen": "/img/productos/Lampara.jpg",
    "precio": 99.05,
    "categoria": "Hogar",
    "stock": 35,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Cortina",
    "descripcion": "Cortina de tela de 2 paneles para decoracion o privacidad.",
    "imagen": "/img/productos/Cortina.jpg",
    "precio": 297.43,
    "categoria": "Hogar",
    "stock": 29,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Almohada",
    "descripcion": "Almohada de plumas de ganso con funda de algodon suave.",
    "imagen": "/img/productos/Almohada.jpg",
    "precio": 217.03,
    "categoria": "Hogar",
    "stock": 33,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Toalla",
    "descripcion": "Toalla de baño de algodon con bordado y alta absorcion.",
    "imagen": "/img/productos/Toalla.jpg",
    "precio": 119.64,
    "categoria": "Hogar",
    "stock": 43,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Perfume",
    "descripcion": "Perfume para hombre con notas amaderadas y especiadas.",
    "imagen": "/img/productos/Perfume.jpg",
    "precio": 246.30,
    "categoria": "Hogar",
    "stock": 43,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Jabon",
    "descripcion": "Jabon de manos liquido con aroma a coco y karite.",
    "imagen": "/img/productos/Jabon.jpg",
    "precio": 282.95,
    "categoria": "Hogar",
    "stock": 47,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Shampoo",
    "descripcion": "Shampoo para cabello graso con ingredientes naturales.",
    "imagen": "/img/productos/Shampoo.jpg",
    "precio": 285.48,
    "categoria": "Hogar",
    "stock": 19,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Acondicionador",
    "descripcion": "Acondicionador para cabello rizado con aceite de argan.",
    "imagen": "/img/productos/Acondicionador.jpg",
    "precio": 185.79,
    "categoria": "Hogar",
    "stock": 16,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Desodorante",
    "descripcion": "Desodorante en spray para mujer con fragancia floral.",
    "imagen": "/img/productos/Desodorante.jpg",
    "precio": 122.27,
    "categoria": "Hogar",
    "stock": 40,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun2",
    "nombre": "Cepillo de dientes",
    "descripcion": "Cepillo de dientes de cerdas suaves con mango ergonomico.",
    "imagen": "/img/productos/Cepillodedientes.jpg",
    "precio": 126.47,
    "categoria": "Hogar",
    "stock": 28,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Pasta dental",
    "descripcion": "Pasta dental blanqueadora con bicarbonato de sodio.",
    "imagen": "/img/productos/Pastadental.jpg",
    "precio": 214.63,
    "categoria": "Hogar",
    "stock": 46,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Cepillo de cabello",
    "descripcion": "Cepillo de cabello desenredante con cerdas de nylon.",
    "imagen": "/img/productos/Cepillodecabello.jpg",
    "precio": 100.72,
    "categoria": "Hogar",
    "stock": 43,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Gel para cabello",
    "descripcion": "Gel para cabello de fijacion fuerte y duradera.",
    "imagen": "/img/productos/Gelparacabello.jpg",
    "precio": 248.25,
    "categoria": "Hogar",
    "stock": 29,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Tijeras",
    "descripcion": "Tijeras de cocina con hojas de acero inoxidable y mango ergonomico.",
    "imagen": "/img/productos/Tijeras.jpg",
    "precio": 61.83,
    "categoria": "Academico",
    "stock": 44,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Pinzas",
    "descripcion": "Pinzas de cocina de acero inoxidable para manipular alimentos.",
    "imagen": "/img/productos/Pinzas.jpg",
    "precio": 50.74,
    "categoria": "Academico",
    "stock": 49,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Espejo",
    "descripcion": "Espejo de pared redondo de 60cm de diametro para decoracion.",
    "imagen": "/img/productos/Espejo.jpg",
    "precio": 195.96,
    "categoria": "Hogar",
    "stock": 15,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Camara",
    "descripcion": "Camara compacta con sensor CMOS de 20.1 megapixeles.",
    "imagen": "/img/productos/Camara.jpg",
    "precio": 83.67,
    "categoria": "Tecnologia",
    "stock": 16,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Televisor",
    "descripcion": "Televisor de 55 pulgadas con resolucion 4K y tecnologia HDR.",
    "imagen": "/img/productos/Televisor.jpg",
    "precio": 279.71,
    "categoria": "Tecnologia",
    "stock": 19,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Equipo de sonido",
    "descripcion": "Equipo de sonido de alta fidelidad con conexion Bluetooth.",
    "imagen": "/img/productos/Equipodesonido.jpg",
    "precio": 63.26,
    "categoria": "Tecnologia",
    "stock": 21,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun3",
    "nombre": "Altavoz",
    "descripcion": "Altavoz portatil resistente al agua y con bateria de larga duracion.",
    "imagen": "/img/productos/Altavoz.jpg",
    "precio": 165.02,
    "categoria": "Tecnologia",
    "stock": 33,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Microfono",
    "descripcion": "Microfono de condensador con patron de captacion cardioide.",
    "imagen": "/img/productos/Microfono.jpg",
    "precio": 212.84,
    "categoria": "Tecnologia",
    "stock": 46,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Guitarra",
    "descripcion": "Guitarra acustica de 6 cuerdas con cuerpo de madera de abeto.",
    "imagen": "/img/productos/Guitarra.jpg",
    "precio": 211.43,
    "categoria": "Tecnologia",
    "stock": 50,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Teclado",
    "descripcion": "Teclado electronico de 61 teclas con sonidos de piano y sintetizador.",
    "imagen": "/img/productos/Teclado.jpg",
    "precio": 74.38,
    "categoria": "Tecnologia",
    "stock": 27,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Mouse",
    "descripcion": "Mouse inalambrico ergonomico con sensor optico de alta precision.",
    "imagen": "/img/productos/Mouse.jpg",
    "precio": 260.98,
    "categoria": "Tecnologia",
    "stock": 43,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Teclado y mouse",
    "descripcion": "Combo de teclado y mouse inalambricos con diseño compacto.",
    "imagen": "/img/productos/Tecladoymouse.jpg",
    "precio": 281.12,
    "categoria": "Tecnologia",
    "stock": 34,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Monitor",
    "descripcion": "Monitor de 24 pulgadas con resolucion Full HD y tecnologia IPS.",
    "imagen": "/img/productos/Monitor.jpg",
    "precio": 216.93,
    "categoria": "Tecnologia",
    "stock": 17,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Impresora",
    "descripcion": "Impresora multifuncional de inyeccion de tinta con conectividad WiFi.",
    "imagen": "/img/productos/Impresora.jpg",
    "precio": 176.85,
    "categoria": "Tecnologia",
    "stock": 40,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Escaner",
    "descripcion": "Escaner de alta resolucion con alimentador automatico de documentos.",
    "imagen": "/img/productos/Escaner.jpg",
    "precio": 256.09,
    "categoria": "Tecnologia",
    "stock": 37,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Proyector",
    "descripcion": "Proyector de cine en casa con alta resolucion para ver tus peliculas favoritas",
    "imagen": "/img/productos/Proyector.jpg",
    "precio": 138.89,
    "categoria": "Tecnologia",
    "stock": 39,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun4",
    "nombre": "Telefono",
    "descripcion": "Un telefono inteligente moderno y funcional, con una camara de alta resolucion y un sistema operativo avanzado que te permite realizar multiples tareas al mismo tiempo.",
    "imagen": "/img/productos/Telefono.jpg",
    "precio": 218.06,
    "categoria": "Tecnologia",
    "stock": 19,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Tablet",
    "descripcion": "Una tablet ligera y portatil, ideal para consumir contenido multimedia y realizar tareas basicas, con una pantalla tactil y un sistema operativo intuitivo y facil de usar.",
    "imagen": "/img/productos/Tablet.jpg",
    "precio": 136.91,
    "categoria": "Tecnologia",
    "stock": 49,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Laptop",
    "descripcion": "Una laptop potente y versatil, diseñada para satisfacer las necesidades de cualquier usuario, con una pantalla de alta definicion y un procesador rapido y eficiente.",
    "imagen": "/img/productos/Laptop.jpg",
    "precio": 215.05,
    "categoria": "Tecnologia",
    "stock": 49,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Cargador",
    "descripcion": "Un cargador de alta calidad y durabilidad, compatible con una amplia variedad de dispositivos, con un diseño ergonomico y compacto que facilita su transporte.",
    "imagen": "/img/productos/Cargador.jpg",
    "precio": 59.69,
    "categoria": "Tecnologia",
    "stock": 50,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Bateria externa",
    "descripcion": "Una bateria portatil y recargable, ideal para cargar tus dispositivos moviles en cualquier momento y lugar, con capacidad para varias cargas y un diseño compacto y ligero.",
    "imagen": "/img/productos/Bateriaexterna.jpg",
    "precio": 286.21,
    "categoria": "Tecnologia",
    "stock": 49,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Mochila",
    "descripcion": "Una mochila resistente y comoda, diseñada para transportar tus pertenencias de manera segura y organizada, con un estilo moderno y juvenil que se adapta a cualquier ocasion.",
    "imagen": "/img/productos/Mochila.jpg",
    "precio": 189.52,
    "categoria": "Decoracion",
    "stock": 21,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Bolso",
    "descripcion": "Un bolso de mano versatil y funcional, ideal para llevar tus objetos personales, con multiples compartimentos y un diseño elegante que complementa cualquier outfit.",
    "imagen": "/img/productos/Bolso.jpg",
    "precio": 107.23,
    "categoria": "Decoracion",
    "stock": 18,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Maleta",
    "descripcion": "Una maleta resistente y espaciosa, perfecta para llevar todo lo que necesitas en tus viajes, con ruedas giratorias y asa telescopica para facilitar el transporte.",
    "imagen": "/img/productos/Maleta.jpg",
    "precio": 103.81,
    "categoria": "Decoracion",
    "stock": 35,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Cinturon",
    "descripcion": "Un cinturon clasico y elegante que complementa cualquier atuendo, ideal para uso diario o para ocasiones formales.",
    "imagen": "/img/productos/Cinturon.jpg",
    "precio": 221.15,
    "categoria": "Decoracion",
    "stock": 40,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Bufanda",
    "descripcion": "Una bufanda suave y abrigada que te mantendra caliente durante el invierno, con un diseño moderno y atractivo que combina con cualquier estilo.",
    "imagen": "/img/productos/Bufanda.jpg",
    "precio": 296.35,
    "categoria": "Decoracion",
    "stock": 31,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
  {
    "usuario": "comun5",
    "nombre": "Refrigeradora",
    "descripcion": "Refigeradora grande perfecta para almacenar tus alimentos y bebidas favoritas.",
    "imagen": "/img/productos/Refigeradora.jpg",
    "precio": 500.35,
    "categoria": "Hogar",
    "stock": 13,
    "solicitud": {
      "fecha_solicitud": ISODate("2023-04-27T00:00:00Z"),
      "estado": "pendiente"
    }
  },
]);


//------------ REPORTES -------------
//Reporte 1 ---> TOP 10 PRODUCTOS MAS VENDIDOS EN UN INTERVALO DE TIEMPO
db.ordenes.aggregate([
  {
    $match: {
      fecha_pedido: {
        $gte: ISODate("2021-04-27T00:00:00Z"),
        $lte: ISODate("2025-04-27T00:00:00Z"),
      }
    }
  },
  {
    $unwind: "$productos" // Separar cada elemento del array de productos en documentos separados
  },
  {
    $group: {
      _id: { nombre: "$productos.nombre" }, // Agrupar por el nombre del producto
      unidadesTotales: { $sum: "$productos.unidadesCompra" } // Sumar las unidades de cada producto
    }
  },
  {
    $sort:
    {
      ganancia: -1
    }
  },
  {
    $limit: 10
  }
])

//Reporte 2 ---> TOP 5 CLIENTES QUE MAS GANANCIAS POR COMPRAS HAN GENERADO EN UN INTERVALO DE TIEMPO
db.ordenes.aggregate([
  {
    $match: {
      fecha_pedido: {
        $gte: ISODate("2021-04-27T00:00:00Z"),
        $lte: ISODate("2025-04-27T00:00:00Z"),
      }
    }
  },
  {
    $unwind: "$productos" // Separar cada elemento del array de productos en documentos separados
  },
  {
    $group: {
      _id: { vendedor: "$productos.usuario" }, // Agrupar por el nombre del producto
      ganancia: { $sum: "$productos.ganancia.ganancia_usuario" } // Sumar las unidades de cada producto
    }
  },
  {
    $sort:
    {
      ganancia: -1
    }
  },
  {
    $limit: 5
  }
])

//Reporte 3 ---> TOP 5 CLIENTES QUE MAS PRODUCTOS HAN VENDIDO EN UN INTERVALO DE TIEMPO
db.ordenes.aggregate([
  {
    $match: {
      fecha_pedido: {
        $gte: ISODate("2021-04-27T00:00:00Z"),
        $lte: ISODate("2025-04-27T00:00:00Z"),
      }
    }
  },
  {
    $unwind: "$productos" // Separar cada elemento del array de productos en documentos separados
  },
  {
    $group: {
      _id: { vendedor: "$productos.usuario" }, // Agrupar por el nombre del producto
      unidadesTotales: { $sum: "$productos.unidadesCompra" } // Sumar las unidades de cada producto
    }
  },
  {
    $sort:
    {
      unidadesTotales: -1
    }
  },
  {
    $limit: 5
  }
])

//Reporte 4 ---> Top 10 clientes que mas pedidos han realizado en un intervalo de tiempo
db.ordenes.aggregate([
  {
    $match: {
      fecha_pedido: {
        $gte: ISODate("2021-04-27T00:00:00Z"),
        $lte: ISODate("2025-04-27T00:00:00Z"),
      }
    }
  },
  {
    $group: {
      _id: { comprador: "$comprador_usuario" }, // Agrupar por el nombre del producto
      pedidos: { $sum: 1 } // Sumar las unidades de cada producto
    }
  },
  {
    $sort:
    {
      pedidos: -1
    }
  },
  {
    $limit: 5
  }
])

//Reporte 5 ---> Top 10 clientes que mas productos tienen a la venta
db.productos.aggregate([
  {
    $match: {
      "solicitud.fecha_solicitud": {
        $gte: ISODate("2021-03-01"),
        $lte: ISODate("2025-03-01")
      },
      "solicitud.estado": "aceptado"
    }
  },
  {
    $group: {
      _id: "$usuario",
      stockTotal: { $sum: "$stock" }
    }
  },
  {
    $sort:
    {
      stockTotal: -1
    }
  },
  {
    $limit: 10
  }
])

