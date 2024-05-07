import {databases} from "../../../services/appwrite.js";
import {Query} from "appwrite";
import * as XLSX from "xlsx";

export function RespaldoDB() {

    async function respaldo() {
        const datos = await databases.listDocuments(
            '66236f0d68ca1961f723',
            '66236f14ea5d5305d59d',
            [
                Query.limit(8000),
                Query.offset(6827)
            ]
        )

        console.log(datos.documents); // Success
        const ws = XLSX.utils.json_to_sheet(datos.documents)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Respaldo DB')

        XLSX.writeFile(wb, "Respaldo Base de datos simpatizantes.xlsx")


}
    return  (
        <button
            onClick={respaldo}
            className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Download">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1"
                              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
                    </g>
                </g>
            </svg>
            Descargar respaldo base de datos
            <div
                className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Descargar Respaldo
            </div>
        </button>
    )
}