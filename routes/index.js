const express = require('express'); // Importa el módulo express
const router = express.Router(); // Crea un router de express
const db = require('../config/db'); // Importa la conexión a la base de datos
// Ruta para la página de inicio
router.get('/', async (req, res) => {  // Cuando se accede a la ruta principal
    try {
        const [rows] = await db.query('SELECT * FROM nombre'); // Consulta la base de datos. Una variable envuelta en corchetes significa que solo se usará la primera fila
        res.render('index', { nombres: rows }); // Renderiza el archivo "index.html" en la carpeta "views" y envía los nombres a la plantilla
    } catch (error) {
    
        res.status(500).send('Error en la query, hazla bien'); // Si hay un error, envía un mensaje de error al cliente
        //Esto no es necesario, pero es una buena práctica.
    }
});
// Ruta para agregar un nombre
router.post('/add', async (req, res) => { // Cuando se envía un POST a /add
    const { nombre, puntuacion } = req.body; // Extrae el nombre del cuerpo de la solicitud
    if (!nombre || !puntuacion) {
        return res.status(400).send('Nombre y puntuación son requeridos.');
    }
    try {
        await db.query('INSERT INTO nombre (nombre, puntuacion) VALUES (?,?)', [nombre, puntuacion]); // Inserta el nombre en la base de datos
        res.redirect('/'); // Redirige al usuario a la página principal
    } catch (error) {
        res.status(500).send('Error en el servidor'); // Si hay un error, envía un mensaje de error al cliente
    }
});
// Ruta para ver un nombre /details/{id}

router.get('/details/:id', async (req, res) => { // Cuando se accede a /details/{id}
    const { id } = req.params; // Extrae el id de los parámetros de la solicitud
    try {
        const [rows] = await db.query('SELECT * FROM nombre WHERE id = ?', [id]); // Consulta la base de datos para obtener el nombre con el id especificado
        res.render('details', { nombre: rows[0] }); // Renderiza la plantilla "details.html" con el nombre obtenido
    } catch (error) {
        res.status(500).send('Error en el servidor'); // Si hay un error, envía un mensaje de error al cliente
    }
});

router.get('/eliminar/:id', async (req, res)=>{ 
    const {id} = req.params;
    try {
        await db.query('DELETE FROM nombre WHERE id = ?', [id]);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
}); // Ruta para eliminar un nombre

router.get('/editar/:id', async (req, res) => { // Cuando se accede a /editar/{id}
    const { id } = req.params; // Extrae el id de los parámetros de la solicitud
    try {
        const [rows] = await db.query('SELECT * FROM nombre WHERE id = ?', [id]); // Consulta la base de datos para obtener el nombre con el id especificado
        res.render('editar', { nombre: rows[0] }); // Renderiza la plantilla "editar.html" con el nombre obtenido
    } catch (error) {
        res.status(500).send('Error en el servidor'); // Si hay un error, envía un mensaje de error al cliente
    }
}); // Ruta para editar un nombre
router.post('/editar/:id', async (req, res) => { // Cuando se envía un POST a /update/{id}
    const { id } = req.params; // Extrae el id de los parámetros de la solicitud
    const { nombre, puntuacion } = req.body; // Extrae el nombre y la puntuación del cuerpo de la solicitud
    if (!nombre || !puntuacion) {
        return res.status(400).send('Nombre y puntuación son requeridos.');
    }
    try {
        await db.query('UPDATE nombre SET nombre = ?, puntuacion = ? WHERE id = ?', [nombre, puntuacion, id]); // Actualiza el nombre en la base de datos
        res.redirect('/'); // Redirige al usuario a la página principal
    } catch (error) {
        res.status(500).send('Error en el servidor'); // Si hay un error, envía un mensaje de error al cliente
    }
});
module.exports = router; //Añade el router a la lista de rutas disponibles