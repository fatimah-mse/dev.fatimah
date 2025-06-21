import { useEffect } from "react"
import AboutHero from "../components/AboutHero"
import AboutSkills from "../components/AboutSkills"
import JourneySection from "../components/JourneySection"


export default function About() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <>
            <AboutHero />
            <JourneySection />
            <AboutSkills />
        </>
    )
}
