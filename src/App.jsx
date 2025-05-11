import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Bundler from './Layout/Bundler'
import Theme from './Context/Theme'
import About from './Pages/About'

const App = () => {

  return (
    <Theme>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<Bundler/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Theme>
  )
}

export default App