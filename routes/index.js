const express = require('express'); // Importa el módulo express
const router = express.Router(); // Crea un router de express

// Ruta para la página de inicio
router.get('/', (req, res) => { // req es la solicitud del cliente, res es la respuesta del servidor
    res.render('index');  // Renderiza el archivo "index.html" en la carpeta "views"
});

module.exports = router; //Añade el router a la lista de rutas disponibles