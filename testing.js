import {ID, Query} from 'appwrite'
import {databases} from "./services/appwrite.js";
import XLSX from 'xlsx'

async function iniciarSession () {


    const url = 'https://cloud.appwrite.io/v1/users'

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Key': '5a65278f5fd8efcb4b79511634a962b5e30d94bcee17d875178165efaaf91e7e01010edd48423db72cadc24e13d424a103b0962b4b19c912e4b4e597626abac3ee76c1d5ecaf10778eee81d1c5ce9b7eea6ba091599b43b0d7a6268a2642dc9384c60131a7b73ce43712d7a5edcb133b16317fabe351866ad7b3a679671ff196',
            'X-Appwrite-Project': '66236e553affeb94ba62',
        }
    })
    const data = await response.json()
    console.log(data)
}

async function crearUsuario(email, password, name) {

    try {
        const url = 'https://cloud.appwrite.io/v1/users/bcrypt'

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Appwrite-Key': 'c397e658c8a0ec564c79a28347d96a5c34392cead8eef63d75b0601f79e3ee2704644660d7c7550444190be2a89c481f55e98ad4af021c39e99d9c8f02c35bd4647576c5dc476c759b0dd9949545262d0f9eeeb7c7a4ace9150729308cd4ea2dd2bac25e7618854c7905f172bbdc78c40360cfc6b8ce1064793b30bc9909f29d',
            },
            body: JSON.stringify({id: ID.unique(),email: email, password: password, name: 'Eduardo' })
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

