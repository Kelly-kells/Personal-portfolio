import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from './components/Contact'


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>

    </>
  )
}

export default App
