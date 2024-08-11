import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '/pages/Home.jsx'
import About from '../pages/About'
import ContactUS from '../pages/ContactUS'
import Gallery from '../pages/Gallery'
import Feedback from '../pages/Feedback'
import TourPackages from '../pages/TourPackages'
import BookingForm from '../pages/BookingForm'
import Days6 from '../pages/Days6'
import Days8 from '../pages/Days8'
import Days10 from '../pages/Days10'
import Days12 from '../pages/Days12'
import Days15 from '../pages/Days15'
import Days18 from '../pages/Days18'
import Days182 from '../pages/Days182'
import Days20 from '../pages/Days20'
import PaymentSuccess from '../pages/PaymentSuccess'
import PaymentCancel from '../pages/PaymentCancel'
import Afterfeedback from '../pages/Afterfeedback'






const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUS" element={<ContactUS />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/TourPackages" element={<TourPackages />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Afterfeedback" element={<Afterfeedback />} />


      <Route path="/Days6" element={<Days6 />} />
      <Route path="/Days8" element={<Days8 />} />
      <Route path="/Days10" element={<Days10 />} />
      <Route path="/Days12" element={<Days12 />} />
      <Route path="/Days15" element={<Days15 />} />
      <Route path="/Days18" element={<Days18 />} />
      <Route path="/Days182" element={<Days182 />} />
      <Route path="/Days20" element={<Days20 />} />
      

      <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
      <Route path="/PaymentCancel" element={<PaymentCancel />} />

     
      
      

      
    </Routes>
    
  )
}

export default App