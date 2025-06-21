import { useEffect, useState } from 'react'
import arrow from '../assets/contact/arrow.png'
export default function ScrollToTop() {
    const [showScrollTo, setShowScrollTo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTo(true)
            } else {
                setShowScrollTo(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <img src={arrow} onClick={handleScrollToTop} className={`${showScrollTo ? "translate-x-0" : "translate-x-40"} w-10 2xl:w-14 cursor-pointer transition-all duration-300 ease-in-out fixed bottom-6 right-6 z-40 flex justify-center items-center text-4xl -rotate-90`}/>
    )
}