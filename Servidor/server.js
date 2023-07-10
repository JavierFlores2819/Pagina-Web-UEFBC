const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = express();
app.use(bodyParser.json());


// CONFIGURACIÓN DE LA BASE DE DATOS DE MySQL
const connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
});

//CONEXION CON LA BASE DE DATOS MYSQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
        console.log('url de consumo: ' + config.url + ':' + config.port + '/api');
    }
});

// Configuración de CORS
app.use(cors());


// ESCUCHA EN UN PUERTO ESPECÍFICO
app.listen(config.port, () => {
    console.log(`Servidor iniciado en el puerto ${config.port}`);
});

//CONFIGURANDO CORS
const corsOptions = {
    origin: config.url_pagina,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

/**
 {
    "tabla": "usuario",
    "campos": ["USR_ID",
        "USR_DNI"
    ],
    "where_nombre": "USR_ID",
    "where_valor": 2
} 
 */

//SERVICIO PARA OBTENER DATOS
app.post('/api/get', (req, res) => {
    // Obtener los parámetros de la consulta
    const data = req.body;
    var campos = "*";
    var valores = [];
    var whereClause = '';

    // Valido envío de nombre de tabla
    if (!data.tabla) {
        return res.status(400).json({ error: 'Nombre de tabla no proporcionado' });
    }

    // Valido envío de campos
    if (data.campos && Array.isArray(data.campos) && data.campos.length > 0) {
        campos = data.campos.map(campo => campo).join(', ');
    }

    // Construir la consulta SQL dinámica
    var query = `SELECT ${campos} FROM ${data.tabla}`;

    // Valido envío de campos where
    if (data.where && Array.isArray(data.where) && data.where.length > 0) {
        const whereConditions = data.where.map(condition => {
            return `${condition.nombre} ${condition.condicion} ?`;
        });

        whereClause = ` WHERE ${whereConditions.join(' ' + data.where[0].tipo + ' ')}`;
        valores = data.where.map(condition => condition.valor);
    }

    // Agregar la cláusula WHERE a la consulta SQL
    query += whereClause;
console.log(query);
    connection.query(query, valores, (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error });
        } else {
            res.status(200).json(results);
        }
    });
});


/*
{
  "tabla": "usuario",
  "campos": ["USR_DNI", "USR", "USR_PSWD","USR_ESTADO","USR_TIPO"],
  "valores": ["2200423370","admin", "admin","A", "A"]
}

*/
//SERVICIO PARA CREAR
app.post('/api/create', (req, res) => {
    // Obtener los parámetros del cuerpo de la solicitud
    const data = req.body;

    //valido envio de nombre de tabla
    if (!data.tabla) {
        return res.status(400).json({ error: 'Nombre de tabla no proporcionado' });
    }
    //valido envio de nombre de campos
    if (!data.campos || !Array.isArray(data.campos) || data.campos.length === 0) {
        return res.status(400).json({ error: 'Campos no proporcionados o inválidos' });
    }
    //valido envio de valor de campos
    if (!data.valores || !Array.isArray(data.valores) || data.valores.length === 0 || data.campos.length !== data.valores.length) {
        return res.status(400).json({ error: 'valores no proporcionados o inválidos' });
    }

    const tabla = data.tabla;
    const campos = data.campos;
    const valores = data.valores;

    // Generar los marcadores de posicion
    const placeholders = campos.map(() => '?').join(', ');

    // Generar la consulta SQL dinámica
    const cadena = `INSERT INTO ${tabla} (${campos.join(', ')}) VALUES (${placeholders})`;

    // Realizar la inserción en la tabla
    connection.query(cadena, valores, (error, results) => {
        if (error) {
            console.error('Error al realizar la inserción:', error);
            res.status(500).json({ error: 'Error al crear el recurso' });
        } else {
            res.status(200).json({ message: 'Recurso creado exitosamente' });
        }
    });
});


/*
{
  "tabla": "usuario",
  "campos": [
    { "nombre": "USR_ID", "valor": 2},
    { "nombre": "USR_DNI", "valor": "2260424384" },
    { "nombre": "USR", "valor": "admin" },
    { "nombre": "USR_PSWD", "valor": "admin" },
    { "nombre": "USR_ESTADO", "valor": "A" },
    { "nombre": "USR_TIPO", "valor": "A" }
  ]
}
*/
//SERVICIO PARA ACTUALIZAR
app.put('/api/update', (req, res) => {
    // Obtener los parámetros del cuerpo de la solicitud
    const data = req.body;
    //valido envio de nombre de tabla
    if (!data.tabla) {
        return res.status(400).json({ error: 'Nombre de tabla no proporcionado' });
    }
    if (!data.campos || !Array.isArray(data.campos) || data.campos.length === 0) {
        return res.status(400).json({ error: 'Arreglo de campos no proporcionado o inválido' });
    }
    const tabla = data.tabla;
    const campos = data.campos;

    // Obtener el nombre del primer campo y su valor (asumiendo que corresponde al identificador)
    const id = campos[0];
    const id_nombre = id.nombre;
    const id_valor = id.valor;

    // Construir la consulta SQL de actualización
    //slice desde la posicion 1 del array campos, map para crear un arreglo del numero de datos y join para crear un string del arreglo crado anteriormente
    const placeholders = campos.slice(1).map(campo => '?? = ?').join(', ');
    //slice desde la posicion 1 del array campos, reduce para crear un nuevo array del array de objetos sin sus campos identificadores
    const valores = campos.slice(1).reduce((acc, campo) => [...acc, campo.nombre, campo.valor], []);
    const cadena = `UPDATE ${tabla} SET ${placeholders} WHERE ?? = ?`;

    //se agregan el parametro del id al arreglo de datos
    valores.push(id_nombre, id_valor);

    // Realizar la actualización en la base de datos
    connection.query(cadena, valores, (error, results) => {
        if (error) {
            console.error('Error al realizar la actualización:', error);
            res.status(500).json({ error: 'Error al actualizar el recurso' });
        } else {
            res.status(200).json({ message: 'Recurso actualizado exitosamente' });
        }
    });
});


/*
{
    "tabla": "usuario",
    "nombre": "USR_ID",
    "valor": 1
}
*/
//SERVICIO PARA BORRAR
app.delete('/api/delete', (req, res) => {
    // Obtener los parámetros del cuerpo de la solicitud
    const data = req.body;

    const cadena = `DELETE FROM ${data.tabla} WHERE ?? = ?`;

    // Realizar la eliminación en la base de datos utilizando los parámetros
    connection.query(cadena, [data.nombre, data.valor], (error, results) => {
        if (error) {
            console.error('Error al realizar la eliminación:', error);
            res.status(500).json({ error: 'Error al eliminar el recurso' });
        } else {
            console.log(results);
            res.status(200).json({ message: 'Recurso eliminado exitosamente' });
        }
    });
});
