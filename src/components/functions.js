import databases from "../../services/appwrite.js";
import { ID } from 'appwrite'

export async function createDocument( ApellidoPaterno, ApellidoMaterno, Nombres, ClaveDeElector, Calle, Numero, Colonia, Telefono) {

    await databases.createDocument(
        '66236f0d68ca1961f723',
        '66236f14ea5d5305d59d',
        ID.unique(),
        {
            ApellidoPaterno: ApellidoPaterno,
            ApellidoMaterno: ApellidoMaterno,
            Nombres: Nombres,
            ClaveDeElector: ClaveDeElector,
            Calle: Calle,
            Numero: Numero,
            Colonia: Colonia,
            Telefono: Telefono
        }
    )
        .then(data => {console.log(data);return true})
        .catch(data => {console.log(data); return false})


}


