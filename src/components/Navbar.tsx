import { useEffect, useState } from 'react'
import xCloseScroll from '../assets/Navbar/x-white.png'
import xClose from '../assets/Navbar/x-black.png'
import toggleScroll from '../assets/Navbar/IconNav.png'
import toggle from '../assets/Navbar/IconNavScroll.png'
import { NavLink } from 'react-router-dom'
import { NavData } from '../Data/NavData'

export default function Navbar() {

    const [show, setShow] = useState(false)
    const [header, setHeader] = useState(false)

    function handleScroll() {
        if (window.scrollY > 50) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    function handleScrollToTop() {
        setShow(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <nav className={`4xl:px-[10%] fixed top-0 z-50 flex justify-between items-center ${header ? 'bg-myPrimary top-0 shadow-md' : 'bg-mybg'} transition-all duration-700 ease-in-out w-full py-5 max-992:py-4 max-992:px-10 max-768:px-5 px-20`}>
            <h1 className={`transition-all duration-700 ease-in-out ${header ? 'text-white' : 'text-myPrimary'} font-merienda text-2xl max-768:text-xl font-bold`}>Dev. Fatimah Mse</h1>
            <div className={` flex justify-between items-center max-992:w-full max-992:flex-col max-992:fixed max-992:top-0 max-992:right-0 max-992:h-screen transition-all duration-700 ease-in-out max-992:justify-evenly max-992:gap-0 ${header ? 'bg-myPrimary' : 'bg-mybg'} ${show ? 'translate-x-0' : 'max-992:translate-x-[200%]'}`}>
                <h1 className={`transition-all duration-700 ease-in-out ${header ? 'text-white' : ''} font-merienda text-2xl hidden max-992:block`}>Dev. Fatimah Mse</h1>
                <ul className='flex gap-6 2xl:gap-4 max-992:flex-col max-992:justify-evenly max-992:items-center max-992:gap-10'>
                    {NavData.map((e, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    onClick={handleScrollToTop}
                                    to={e.link}
                                    className={({ isActive }) =>
                                        `py-2.5 2xl:py-3.5 px-5 font-semibold ${header ? 'text-white' : ''} ${isActive ? 'text-white bg-mySecondary rounded-lg' : ''} transition-all duration-700 ease-in-out`}
                                >
                                    {e.item}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <img onClick={() => setShow(!show)} src={header ? xCloseScroll : xClose} className='hidden max-992:block absolute top-5 left-4' alt="close" />
            </div>
            <img onClick={() => setShow(!show)} src={header ? toggleScroll : toggle} className='hidden max-992:block' alt="toggle" />
        </nav>
    )
}