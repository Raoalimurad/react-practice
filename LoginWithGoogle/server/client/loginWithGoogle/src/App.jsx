import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Dashborad from './Components/Dashborad'
import Error from './Components/Error'
import Header from './Components/Header'
import Login from './Components/Login'
const App = () => {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/about'  element={<About/>}/>
    <Route path='/dashboard'  element={<Dashborad/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='*'  element={<Error/>}/>

  </Routes>
  </>
  )
}

export default App