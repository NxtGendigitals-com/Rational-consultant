import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ServicesPage from './Pages/ServicesPage'
import Testimonials from './Pages/Testimonials'
import WhyChooseUs from './Pages/WhyChooseUs'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <Navbar activeHref={location.pathname} />
      <div key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </>
  )
}

export default App
