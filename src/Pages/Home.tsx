import { useEffect } from "react"
import BenefitsSection from "../components/BenefitsSection"
import CreativeSection from "../components/CreativeSection"
import HomeHero from "../components/HomeHero"
import WorksSection from "../components/WorksSection"

export default function Home() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <>
            <HomeHero />
            <CreativeSection />
            <BenefitsSection />
            <WorksSection />
        </>
    )
}
