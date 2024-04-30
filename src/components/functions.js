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
            Numero: Number(Numero),
            Colonia: Colonia,
            Telefono: Number(Telefono),
            Grupo: Grupo,
            Promotor: Promotor,
            Seccion: Number(Seccion),
            NombreCapturador: localStorage.getItem('name')
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
    try {
        const promise = await account.create(ID.unique(), email, password)
        console.log(promise)
    } catch (error) {
        console.error('Error la crear los datos:', error)
    }

}

export async function deleteSession(id) {
    await account.deleteSession(id)
}
export async function crearUsuario(email, password, name) {

    try {
        const url = 'https://cloud.appwrite.io/v1/users'

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Appwrite-Project': '66236e553affeb94ba62',
                'X-Appwrite-Key': 'c397e658c8a0ec564c79a28347d96a5c34392cead8eef63d75b0601f79e3ee2704644660d7c7550444190be2a89c481f55e98ad4af021c39e99d9c8f02c35bd4647576c5dc476c759b0dd9949545262d0f9eeeb7c7a4ace9150729308cd4ea2dd2bac25e7618854c7905f172bbdc78c40360cfc6b8ce1064793b30bc9909f29d'
            },
            body: JSON.stringify({userId: ID.unique(),email: email, password: password })
        })
        const data = await response.json()

        if (response.ok) {
            alert('Usuario creado exitosamente')
        }
        console.log(data)
    } catch (error) {
        console.log('Error al crear el usuario:', error)
    }

}