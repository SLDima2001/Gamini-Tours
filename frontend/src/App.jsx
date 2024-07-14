import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '/pages/Home.jsx'
import About from '../pages/About'
import ContactUS from '../pages/ContactUS'
import Gallery from '../pages/Gallery'
import Feedback from '../pages/Feedback'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUS" element={<ContactUS />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Feedback" element={<Feedback />} />
    </Routes>
    
  )
}

export default App