import {databases} from "../../../services/appwrite.js";
import {Query} from "appwrite";
import * as XLSX from "xlsx";

export function RespaldoDB() {

    async function respaldo() {
        const datos = await databases.listDocuments(
            '66236f0d68ca1961f723',
            '66236f14ea5d5305d59d',
            [
                Query.limit(3500),
                Query.offset(0)
            ]
        )

        console.log(datos.documents); // Success
        const ws = XLSX.utils.json_to_sheet(datos.documents)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Respaldo DB')

        XLSX.writeFile(wb, "Respaldo Base de datos simpatizantes.xlsx")


}
    return  (
        <button onClick={respaldo} className="text-black bg-black">Descargar Datos bd</button>
    )
}