import { useEffect } from "react"
import icon from "../assets/Work Section/icon.png"
import AllWorks from "../components/AllWorks"
import CommonHero from "../components/CommonHero"

export default function Portfolio() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    
    return (
        <>
            <CommonHero
                icon={icon}
                title="My Creative Portfolios"
                desc="Here's what some of my satisfied clients have to say about my work"
            />
            <AllWorks />
        </>
    )
}
