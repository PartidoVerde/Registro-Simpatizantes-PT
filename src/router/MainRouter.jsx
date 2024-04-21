import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Form from '../components/Form/Form'

export default function MainRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/form' Component={Form}/>
    </Routes>
    </BrowserRouter>
  )
}
