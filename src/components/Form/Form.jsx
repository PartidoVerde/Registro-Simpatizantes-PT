import {useEffect, useState} from "react";
import {createDocument, middleware} from "../functions.js";
import ModalError from "../Modals/ModalError.jsx";
import '../../assets/input.css'

function Form() {
    const [ apellidoPaterno, setApellidoPaterno ] = useState("")
    const [ apellidoMaterno, setApellidoMaterno ] = useState("")
    const [ nombre, setNombre ] = useState("")
    const [ claveDeElector, setClaveDeElector ] = useState("")
    const [ calle, setCalle ] = useState("")
    const [ numero, setNumero ] = useState('')
    const [ colonia, setColonia ] = useState("")
    const [ telefono, setTelefono ] = useState('')
    const [ showModal, setShowModal ] = useState(false)
    const [ message, setMessage ] = useState('false')

    const handleSubmit = e => {
        e.preventDefault()

        if ( [ apellidoPaterno, apellidoMaterno, nombre, calle, numero, colonia, telefono ].includes('') ) {

            setShowModal(true)

            setTimeout(() => {
                setShowModal(false)
            }, 3000)

            console.log('Hay al menos un campo vacio')


        } else {

            const CreateData = createDocument( apellidoPaterno, apellidoMaterno, nombre, claveDeElector, calle, numero, colonia, telefono )

            setApellidoPaterno('')
            setApellidoMaterno('')
            setNombre('')
            setClaveDeElector('')
            setCalle('')
            setNumero('')
            setColonia('')
            setTelefono('')

            console.log('Datos enviados correctamente')

        }


    }

    useEffect(() => {
        middleware()
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 transition ease-in-out duration-150">
                <h2 className="text-2xl font-bold text-gray-200 mb-4 moveUp">Registro de datos</h2>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    { showModal &&
                        <ModalError
                            message="Hay al menos un campo vacio"/>
                    }
                    <div className="flex space-x-2 mb-4 moveDown">
                        <input
                            placeholder="Apellido Paterno"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                            value={apellidoPaterno}
                            onChange={event => setApellidoPaterno(event.target.value)}
                        />
                        <input
                            placeholder="Apellido Materno"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                            value={apellidoMaterno}
                            onChange={event => setApellidoMaterno(event.target.value)}
                        />
                    </div>
                    <input
                        placeholder="Nombres"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"
                        value={nombre}
                        onChange={event => setNombre(event.target.value)}
                    />
                    <input
                        placeholder="Clave de Elector"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"
                        value={claveDeElector}
                        onChange={evento => setClaveDeElector(evento.target.value)}
                    />
                    <div className="flex space-x-2 mb-4">
                        <input
                            placeholder="Calle"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-3/4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                            value={calle}
                            onChange={event => setCalle(event.target.value)}
                        />
                        <input
                            placeholder="Numero"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="number"
                            value={numero}
                            onChange={event => setNumero(event.target.value)}
                        />
                    </div>
                    <input
                        placeholder="Colonia"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"
                        value={colonia}
                        onChange={event => setColonia(event.target.value)}
                    />
                    <input
                        placeholder="Telefono"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="number"
                        value={telefono}
                        onChange={event => setTelefono(event.target.value)}
                    />
                    <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="gender">
                        Grupo
                    </label>
                    <select
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        id="Grupo"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="age">
                        Promotor
                    </label>
                    <select
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        id="Promotor"
                    >
                        <option value="1">1.1</option>
                        <option value="2">1.2</option>
                        <option value="3">1.3</option>
                        <option value="4">1.4</option>
                        <option value="5">1.5</option>
                        <option value="6">1.6</option>
                    </select>
                    <button
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Form