import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import './App.css'
import Preloader from './components/Preloader'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function Route() {

  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    })

    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)

    return () => clearTimeout(timer)

  }, [])

  return (
    <>
      {showPreloader ? <Preloader /> : null}
      {!showPreloader && (
        <>
          <ScrollToTop />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  )
}

export default Route
