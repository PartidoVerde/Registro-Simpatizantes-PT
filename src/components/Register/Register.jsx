import Header from "../Header/Header.jsx";
import {useState} from "react";
import {crearUsuario, createAccount} from "../functions.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const createUser = (e) => {
        e.preventDefault()

        if (email !== '' && password.length >= 8) {
            const account =  crearUsuario(email, password)
        } else {
            alert('Verifique el correo y contraseña, la contraseña debe de contener al menos 8 caracteres')
        }
        navigate('/')
    }

    return (
        <>
            <Header/>
            <div className="flex flex-col items-center justify-center h-screen dark">
                <form className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6" onSubmit={createUser}>
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Create Account</h2>
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
                        <button
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                            type="submit">Create Account
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}