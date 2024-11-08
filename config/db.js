const mysql = require('mysql2');

const pool = mysql.createPool({ //Pool es una conexión persistente a la base de datos
    host: 'localhost',          // Cambia esto si tu base de datos no está en localhost
    port:'8095',                // Como estoy usando docker, el puerto de la base de datos es 8095
    user: 'root',               // Cambia al usuario que usas para la base de datos
    password: '1234',           // Cambia a la contraseña de tu base de datos
    database: 'nombres'         // Nombre de tu base de datos
});

module.exports = pool.promise(); 
//Exporta la conexión como una promesa, lo que permite usar async/await
//La promesa significa que la conexión se realizará de forma asíncrona, 
//lo que permite que el servidor siga funcionando mientras se conecta a la base de datos.