import '../../assets/input.css'

const ModalError = ({ message,  }) => {

    return (
        <div className="flex justify-center fadeIn">
            <div role="alert" className="max-w-[300px] py-1 bg-red-800 rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex mb-4 fadeIn">
                <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3 ml-1">Error</span>
                <span className="font-semibold mr-2 text-left flex-auto">{message}</span>
            </div>
        </div>
    )
}

export default ModalError