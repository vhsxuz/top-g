import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ErrorPage from '../pages/Error-Page';

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Routing