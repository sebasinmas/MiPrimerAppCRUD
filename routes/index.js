const express = require('express'); // Importa el módulo express
const router = express.Router(); // Crea un router de express
const db = require('../config/db'); // Importa la conexión a la base de datos
// Ruta para la página de inicio
router.get('/', async (req, res) => {  // Cuando se accede a la ruta principal
    try {
        const [rows] = await db.query('SELECT * FROM Nombre'); // Consulta la base de datos. Una variable envuelta en corchetes significa que solo se usará la primera fila
        console.log(rows);
        res.render('index', { nombres: rows }); // Renderiza el archivo "index.html" en la carpeta "views" y envía los nombres a la plantilla
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor'); // Si hay un error, envía un mensaje de error al cliente
        //Esto no es necesario, pero es una buena práctica.
    }
    res.render('index');  // Renderiza el archivo "index.html" en la carpeta "views"
});

module.exports = router; //Añade el router a la lista de rutas disponibles