import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Form from '../components/Form/Form'
import Register from "../components/Register/Register.jsx";

export default function MainRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/form' Component={Form}/>
        <Route path='/Register' Component={Register}/>
    </Routes>
    </BrowserRouter>
  )
}
