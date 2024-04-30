import {databases} from "../../../services/appwrite.js";
import {Query} from "appwrite";
import * as XLSX from "xlsx";

export function ConsultaDatos() {


    async function consultaMetas() {

        const datos = await databases.listDocuments(
            '66236f0d68ca1961f723',
            '66236f14ea5d5305d59d',
            [
                Query.limit(5000),
                Query.offset(0)
            ]
        )

            const grupos = {}

            datos.documents.forEach((dato) => {
                if (!grupos[dato.Grupo]) {
                    grupos[dato.Grupo] = []
                }
                grupos[dato.Grupo].push(dato)
            })

        console.log(datos.documents); // Comprobacion de extraccion de los datos


        const consultaDatosGrupo = (grupo, nombreArchivo, nombreHoja) => {
            const ws = XLSX.utils.json_to_sheet(grupos[grupo])
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, ws, nombreHoja)

            XLSX.writeFile(wb, nombreArchivo)
        }

        consultaDatosGrupo('Grupo 1 Ramona Armenta', 'Grupo 1 Ramona Armenta', 'Grupo 1')
        consultaDatosGrupo('Grupo 2 Antonia Alvarado', 'Grupo 2 Antonia Alvarado', 'Grupo 2')
        consultaDatosGrupo('Grupo 3 Josefine Zavala', 'Grupo 3 Josefine Zavala', 'Grupo 3')
        consultaDatosGrupo('Grupo 4 Bryan Castillo', 'Grupo 4 Bryan Castillo', 'Grupo 4')
        consultaDatosGrupo('Grupo 5 Jorge Unda y Annie', 'Grupo 5 Jorge Unda y Annie', 'Grupo 5')
        consultaDatosGrupo('Grupo 6 Candidato', 'Grupo 6 Candidato', 'Grupo 6')


    }

    return  (
        <div className="flex">
            <button
                className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                onClick={consultaMetas}
            >
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
                Descargar Archivo
                <div
                    className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                    Metas de los grupos
                </div>
            </button>
        </div>
    )
}