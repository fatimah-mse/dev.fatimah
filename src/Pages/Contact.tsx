import CommonHero from "../components/CommonHero"
import icon from "../assets/contact/contact.png"
import ContactSection from "../components/ContactSection"
import { useEffect } from "react"

export default function Contact() {

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
                title="We’d love to here from you."
                desc="Here's what some of my satisfied clients have to say about my work"
            />
            <ContactSection />
        </>
    )
}
