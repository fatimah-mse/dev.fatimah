import BenefitsSection from "../components/BenefitsSection"
import CreativeSection from "../components/CreativeSection"
import HomeHero from "../components/HomeHero"
import WorksSection from "../components/WorksSection"

export default function Home() {
    return (
        <>
            <HomeHero />
            <CreativeSection />
            <BenefitsSection />
            <WorksSection />
        </>
    )
}
