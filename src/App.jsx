import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Bundler from './Layout/Bundler'
import Theme from './Context/Theme'

const App = () => {

  return (
    <Theme>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<Bundler/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Theme>
  )
}

export default App