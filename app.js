const express = require('express'); // Importa el módulo express
const path = require('path'); // Importa el módulo path
const app = express(); // Crea una instancia de express
const PORT = 3000; // Puerto en el que se ejecutará el servidor

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura la carpeta de vistas y motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Establece la carpeta de vistas
app.engine('html', require('ejs').renderFile); // Usa el motor de plantillas EJS
app.set('view engine', 'ejs'); // Establece la extensión de los archivos

// Rutas principales a usar
const mainRoutes = require('./routes/index'); // Importa las rutas principales
app.use(express.json()); // Para analizar datos JSON
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formulario
app.use('/', mainRoutes); // Usa las rutas principales


app.listen(PORT, () => { // Inicia el servidor en el puerto especifico
    console.log(`Servidor escuchando en http://localhost:${PORT}`); // Muestra un mensaje en la consola
}); 