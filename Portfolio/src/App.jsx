
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <div className='container'>
        <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/projects" element={<Project/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default App
