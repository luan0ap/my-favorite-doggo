import { Routes, Route } from 'react-router-dom'
import React from 'react'

import './App.css'

import Home from 'pages/Home/Home.jsx'
import Favorites from 'pages/Favorites/Favorites.jsx'
import MainLayout from 'layouts/MainLayout/MainLayout'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
