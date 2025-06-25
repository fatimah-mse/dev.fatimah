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
    const [theme, setTheme] = useState(false)

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

    const togglekMode = () => {
        const newTheme = !theme
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark", !theme)
    }

    return (
        <nav className={`4xl:px-[10%] fixed top-0 z-50 flex justify-between items-center ${header ? 'bg-myPrimary top-0 shadow-md dark:shadow dark:shadow-mybg dark:bg-slate-800' : 'bg-mybg dark:bg-slate-800'} transition-all duration-700 ease-in-out w-full py-5 max-992:py-4 max-992:px-10 max-768:px-5 px-20 dark:bg-slate-800`}>
            <h1 className={`transition-all duration-700 ease-in-out ${header ? 'text-white dark:text-mybg' : 'text-myPrimary dark:text-mybg'} font-merienda text-2xl max-768:text-xl font-bold`}>Dev. Fatimah Mse</h1>
            <div className={`dark:bg-slate-800 flex justify-between items-center max-992:w-full max-992:flex-col max-992:fixed max-992:top-0 max-992:right-0 max-992:h-screen transition-all duration-700 ease-in-out max-992:justify-evenly max-992:gap-0 ${header ? 'bg-myPrimary' : 'bg-mybg'} ${show ? 'translate-x-0' : 'max-992:translate-x-[200%]'}`}>
                <h1 className={`dark:text-mybg transition-all duration-700 ease-in-out ${header ? 'text-white' : ''} font-merienda text-2xl hidden max-992:block`}>Dev. Fatimah Mse</h1>
                <ul className='flex gap-6 2xl:gap-4 max-992:flex-col max-992:justify-evenly max-992:items-center max-992:gap-10'>
                    {NavData.map((e, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    onClick={handleScrollToTop}
                                    to={e.link}
                                    className={({ isActive }) =>
                                        `py-2.5 2xl:py-3.5 px-5 font-semibold ${header ? 'text-white' : 'dark:text-mybg'} ${isActive ? 'text-white bg-mySecondary rounded-lg' : ''} transition-all duration-700 ease-in-out`}
                                >
                                    {e.item}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <label className="hidden max-992:!inline-flex items-center relative">
                    <input
                        onChange={togglekMode}
                        checked={theme}
                        className="peer hidden"
                        type="checkbox"
                    />
                    <div
                        className="relative w-24 h-10 bg-white peer-checked:bg-slate-600 rounded-full after:absolute after:content-[''] after:w-8 after:h-8 after:bg-mySecondary peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-1 after:left-1.5 active:after:w-8 peer-checked:after:left-[90px] peer-checked:after:translate-x-[-100%] shadow-sm duration-700 after:duration-700 after:shadow-md"
                    ></div>
                    <svg
                        height="0"
                        width="100"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-3"
                    >
                        <path
                            d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                        ></path>
                    </svg>
                    <svg
                        height="512"
                        width="512"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-3"
                    >
                        <path
                            d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                        ></path>
                    </svg>
                </label>
                <img onClick={() => setShow(!show)} src={header || theme ? xCloseScroll : xClose} className='hidden max-992:block absolute top-5 left-4' alt="close" />
            </div>
            <div>
                <label className="max-992:hidden inline-flex items-center relative">
                    <input
                        onChange={togglekMode}
                        checked={theme}
                        className="peer hidden"
                        type="checkbox"
                    />
                    <div
                        className="relative w-24 h-10 bg-white peer-checked:bg-slate-600 rounded-full after:absolute after:content-[''] after:w-8 after:h-8 after:bg-mySecondary peer-checked:after:from-zinc-900 dark:peer-checked:after:from-slate-200 peer-checked:after:to-zinc-900 dark:peer-checked:after:to-slate-400 after:rounded-full after:top-1 after:left-1.5 active:after:w-8 peer-checked:after:left-[90px] peer-checked:after:translate-x-[-100%] shadow-sm duration-700 after:duration-700 after:shadow-md"
                    ></div>
                    <svg
                        height="0"
                        width="100"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-3"
                    >
                        <path
                            d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                        ></path>
                    </svg>
                    <svg
                        height="512"
                        width="512"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-3"
                    >
                        <path
                            d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                        ></path>
                    </svg>
                </label>
                <img onClick={() => setShow(!show)} src={header || theme ? toggleScroll : toggle} className='hidden max-992:block' alt="toggle" />
            </div>
        </nav>
    )
}