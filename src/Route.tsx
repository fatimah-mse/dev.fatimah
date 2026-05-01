import 'aos/dist/aos.css'
import AOS from 'aos'
// import { useEffect, useState } from 'react'
import './App.css'
// import Preloader from './components/Preloader'
// import { Outlet } from 'react-router'
// import Navbar from './components/Navbar'
// import ScrollToTop from './components/ScrollToTop'
// import Footer from './components/Footer'
import img from "../src/assets/Under maintenance.webp"

function Route() {

  // const [showPreloader, setShowPreloader] = useState(true)

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }, [])

  // useEffect(() => {

  //   AOS.init({
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     once: false,
  //     mirror: false
  //   })

  //   const timer = setTimeout(() => {
  //     setShowPreloader(false)
  //   }, 3000)

  //   return () => clearTimeout(timer)

  // }, [])

  return (
    <>
      <section className='px-4 py-2 text-center text-myPrimary h-screen flex justify-center items-center'>
        <div>
          <img src={img} alt="Under maintenance" className='block mx-auto max-768:!w-full !w-2/3 mb-4' />
          <strong className='block mb-2 text-4xl max-768:!text-xl'>
            Website Under Construction
          </strong>
          <p className='font-semibold max-768:text-xs'>
            We're busy updating the site for you. Please check back soon!
          </p>
        </div>
      </section>

      {/* {showPreloader ? <Preloader /> : null}
      {!showPreloader && (
        <>
          <ScrollToTop />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )} */}
    </>
  )
}

export default Route
