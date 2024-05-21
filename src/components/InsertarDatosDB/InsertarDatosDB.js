import xlsx from "xlsx";
import fs from "fs";
import pkg from 'pg'
const { Client } = pkg

const filepath = 'src/assets/excels/Convert.xlsx'

// Verifica si existe el archivo
if (!fs.existsSync(filepath)) {
    console.error("No se encontro el archivo", filepath);
    process.exit(1);
}

try{

    // Lee el archivo Excel
    const workbook = xlsx.readFile(filepath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convierte la hoja de Excel a JSON
    const data = xlsx.utils.sheet_to_json(worksheet);

    console.log(data); // Muestra los datos leídos del archivo Excel

    //Configuracion de la conexion a la base de datos
    const client = new Client({
        user: "postgres",
        host: "localhost",
        database: "Distrito7",
        password: "root",
        port: 5432
    })

    client.connect()
        .then(() => console.log("Conexion exitosa a la base de datos"))
        .catch(err => console.log("Error conectando a la base de datos", err.stack));

    // Inserta los datos en la base de datos
    const insertData = async () => {
        for (const row of data) {
            const query = "INSERT INTO secciones(apellidopaterno, apellidomaterno, nombres, clavedeelector, calle, numero, colonia, telefono, auditoria, grupo, promotor, seccion, nombrecapturador) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)"
            const values = [row.ApellidoPaterno, row.ApellidoMaterno, row.Nombres, row.ClaveDeElector, row.Calle, row.Numero, row.Colonia, row.Telefono, row. Auditoria, row.Grupo, row.Promotor, row.Seccion, row.NombreCapturador ];
            try {
                await client.query(query, values);
            } catch (error) {
                console.log("Error al ejecutar la consulta", error);
            }
        }
        console.log("Datos insertados exitosamente")
        client.end()
    }

    insertData()
} catch (error) {
    console.error('Error al leer el archivo de excel', error);
}

