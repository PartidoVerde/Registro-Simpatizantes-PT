import {account, databases} from "../../services/appwrite.js";
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
        .then(data => {console.log(data);return true}) // Success
        .catch(data => {console.log(data); return false}) //Failure
}

export async function createEmailSession( email, password ) {
    console.log('funcion')
    /*await account.createEmailSession( email, password )

        .then((data) => {console.log(data);return data}) // Success
        .catch((data) => {console.log(data); return false}) //Failure*/
        const promise = await account.createEmailSession( email, password )
        return promise
}

export function middleware() {
    if (!localStorage.getItem('id').length > 0) {
        console.log('Aqui se va a mandar a la pagina de login si el usuario no esta dado de alta con login')
    }
}

