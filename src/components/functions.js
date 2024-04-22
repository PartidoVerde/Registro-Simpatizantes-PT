import {account, databases} from "../../services/appwrite.js";
import {ID} from 'appwrite'

export async function createDocument( ApellidoPaterno, ApellidoMaterno, Nombres, ClaveDeElector, Calle, Numero, Colonia, Telefono, Grupo, Promotor, Seccion) {

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
            Telefono: Telefono,
            Grupo: Grupo,
            Promotor: Promotor,
            Seccion: Seccion
        }
    )
        .then(data => {console.log(data);return true}) // Success
        .catch(data => {console.log(data); return false}) //Failure
}

export async function createEmailSession( email, password ) {
    try{
        const promise = await account.createEmailSession( email, password )
        return promise
    }catch(e){
        console.log(e)
        return false
    }
}

export async function createAccount ( email, password ) {
    const promise = await account.create(ID.unique(), email, password)
    console.log(promise)
}

export async function deleteSession(id) {
    await account.deleteSession(id)
    localStorage.clear()
}