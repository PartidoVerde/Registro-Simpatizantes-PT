import './App.css'
import MainRouter from './router/MainRouter.jsx';
import {ConsultaDatos} from "./components/ConsultaDatos/ConsultaDatos.jsx";
import {RespaldoDB} from "./components/RespaldoBD/RespaldoDB.jsx";

function App() {

  return (
    <>
        {/*<MainRouter/>*/}
        <ConsultaDatos/>
    </>
  )
}

export default App
