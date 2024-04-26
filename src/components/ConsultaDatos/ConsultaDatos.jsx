import ModalError from "../Modals/ModalError.jsx";
import grupos from "../../assets/promotores.js";

export function consultaDatos() {
    return  (
        <>
            <div className="flex h-20 w-full">
                <div className='flex justify-end items-end w-full pr-4'>
                    <button
                        className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1 mb-4"
                    >
                        <div
                            className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                                <path
                                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        >
                            Logout
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen dark">
                <div
                    className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 transition ease-in-out duration-150">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4 moveUp">Registro de datos</h2>
                    <form className="flex flex-col">
                        <div className="flex space-x-2 mb-4 moveDown">
                            <input
                                placeholder="Apellido Paterno"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
                            <input
                                placeholder="Apellido Materno"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
                        </div>
                        <input
                            placeholder="Nombres"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                        />
                        <input
                            placeholder="Clave de Elector"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                        />
                        <div className="flex space-x-2 mb-4">
                            <input
                                placeholder="Calle"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-3/4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
                            <input
                                placeholder="Numero"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="number"
                            />
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <input
                                placeholder="Colonia"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-3/4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
                            <input
                                placeholder="Seccion"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="number"
                            />
                        </div>
                        <input
                            placeholder="Telefono"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="number"
                        />
                        <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="gender">
                            Grupo
                        </label>
                        <select
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            id="Grupo"
                        >
                            <option value="">Seleccione</option>

                            { grupos.map(opcion => (
                                <option
                                    key={opcion.value}
                                    value={opcion.value}
                                >{opcion.label}</option>
                            ))}
                        </select>
                        <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="age">
                            Promotor
                        </label>
                        <input
                            placeholder="Promotor"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                        />
                        <button
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}