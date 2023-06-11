const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uefbc'
});

// Conexión a la base de datos MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
    }
});

// Escucha en un puerto específico
app.listen(8080, () => {
    console.log('Servidor Node.js en funcionamiento en el puerto 8080');
});

// Ruta para obtener todos los registros de una tabla
app.get('/api/registros', (req, res) => {
    const { prm1, parametro2 } = req.query; // Obtener los parámetros de la consulta

    const query = `SELECT * FROM ${prm1}`;

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
          //  message = 'Error: '+error.sqlState;
            res.status(500).json({ error });
        } else {
            res.status(200).json(results);
        }
    });
});
