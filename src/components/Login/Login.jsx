import { useState } from "react";
import { createEmailSession } from "../functions.js";
import {Link, useNavigate} from "react-router-dom";


function Login() {
    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(false)
    const user = localStorage.getItem('id')



    async function iniciarSession (e) {
        e.preventDefault()


        if ([ email, password ].includes('')) {
            console.log('Usuario no encontrado');
        } else {
             /*const createSesion =  await createEmailSession(email, password)
                .then((data) => {
                    console.log(data)
                    //localStorage.setItem('id', data.userId)
                    //localStorage.setItem('email', data.providerUid)
                    //navigate('/form')
                })
                .catch(e => console.log(e))
        }*/
        try{
            const promise = await createEmailSession(email,password)
            console.log(promise)
            navigate('/form')
        }catch(e){console.log(e)}
        }
    }

    const redireccion = e => {
        e.preventDefault()
        navigate('/form')
    }

    if (user) {
        console.log('User is logged')
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen dark">
            <form className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6" onSubmit={iniciarSession}>
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
                <div className="flex flex-col">
                    <input
                        placeholder="Email address"
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
                            <div className="flex items-center justify-between flex-wrap">
                                <label className="text-sm text-gray-200 cursor-pointer">
                                </label>
                                <Link className="text-white mt-4" to='/form'> Aun no tienes una cuenta? <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Registrate</a></Link>
                            </div>
                            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Login</button>
                </div>
            </form>
        </div>

)
}

export default Login