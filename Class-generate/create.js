const fs = require('fs');
const mysql = require('mysql');

// Configura la conexión a tu base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uefbc'
});

// Establece la conexión a la base de datos
connection.connect();

// Mapeo de tipos de datos de MySQL a tipos de datos de TypeScript
const typeMapping = {
    varchar: 'string',
    date: 'string',
    datetime: 'string',
    char: 'string',
    int: 'number',
    float: 'number',
    double: 'number',
    decimal: 'number'
};

// Obtén la estructura de las tablas y sus columnas
connection.query('SHOW TABLES', (error, results, fields) => {
    if (error) throw error;

    // Genera los archivos de clases o interfaces
    results.forEach(table => {
        const tableName = table[`Tables_in_${connection.config.database}`];

        // Obtén la estructura de las columnas de la tabla actual
        connection.query(`DESCRIBE ${tableName}`, (error, results, fields) => {
            if (error) throw error;

            // Genera las propiedades de la clase o interfaz basadas en las columnas de la tabla
            const properties = results.map(column => {
                const fieldType = column.Type.toLowerCase();
                const propertyName = column.Field;
                let mappedType;

                if (fieldType.includes('char')) {
                    mappedType = typeMapping.varchar;
                } else if (fieldType.includes('varchar')) {
                    mappedType = typeMapping.varchar;
                } else if (fieldType.includes('date')) {
                    mappedType = typeMapping.varchar;
                } else if (fieldType.includes('datetime')) {
                    mappedType = typeMapping.varchar;
                } else if (fieldType.includes('int')) {
                    mappedType = typeMapping.int;
                } else if (fieldType.includes('float') || fieldType.includes('double') || fieldType.includes('decimal')) {
                    mappedType = typeMapping.float;
                } else {
                    mappedType = 'any';
                }

                return { name: propertyName, type: mappedType };
            });

       /*      // Genera el contenido del archivo de clase o interfaz
            let content = `export interface ${tableName} {
        ${properties.map(property => `${property.name}: ${property.type};`).join('\n        ')}
}`; */

            content = `
              export class ${tableName} {  
                  ${properties.map(property => `${property.name}: ${property.type};`).join('\n        ')}
              constructor(${properties.map(property => `${property.name}: ${property.type}`).join(', ')}) {
                  ${properties.map(property => `this.${property.name} = ${property.name};`).join('\n          ')}
                }
            }
            `;

            // Guarda el archivo de clase o interfaz
            fs.writeFileSync(`Modelos/${tableName}.Model.ts`, content, 'utf8');
        });
    });

    // Cierra la conexión a la base de datos
    connection.end();
});
