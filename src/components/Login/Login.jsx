import {useEffect, useState} from "react";
import {createEmailSession, deleteSessions, obtenerSession} from "../functions.js";
import {Link, useNavigate} from "react-router-dom";
import Header from "../Header/Header.jsx";


function Login() {
    const navigate = useNavigate()

    // Almacena los datos de los inputs para usarlos
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const user = localStorage.getItem('id')

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            // Verificar y cerrar la sesion activa si existe
            const session = await obtenerSession()
            if (session.total > 0) {
                await deleteSessions()
                console.log('Previous session closed')
            }
        } catch (error) {
            console.error('Error closing previous session: ', error.message)
        }

        try {
            // Crea una session si no existe una (el usuario tiene que estar registrado en la base de datos)
            const session = await createEmailSession(email, password)
            if (session) {
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

                let userFound = false

                for (const datos of data.users) {
                    if (datos.email === email) {
                        localStorage.setItem('name', datos.name)
                        userFound = true
                        break // Se detiene el ciclo una vez encontro el email del usuario
                    }
                }

                if (!userFound) {
                    console.error('User not found')
                }

                localStorage.setItem('id', session.userId)
                navigate('/form')
            } else {
                throw new Error('Invalid credentials')
            }
        } catch (error) {
            console.error('Login failed:', error.message)
            alert('Correo o contraseña incorrecta')
        }
    }

    useEffect(() => {
        if (user) {
            console.log('User is logged')
            alert('El usuario ya inicio sesion')
            navigate('/form')
        }
    }, []);

    return (
        <>
        <Header/>
        <div className="flex flex-col items-center justify-center h-screen dark">
            <form className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
                <div className="flex flex-col">
                    <input
                        placeholder="Email"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                        <input
                            placeholder="Password"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                            <div className="flex flex-wrap">
                                <label className="text-sm text-gray-200 cursor-pointer">
                                </label>
                                {/*<p className="text-white mt-4"> Aun no tienes una cuenta? <Link to='/Register' className="text-sm text-blue-500 -200 hover:underline mt-4">Registrate</Link></p>*/}
                            </div>
                            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Login</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login