import arrow from "../assets/contact/arrow.png"

export interface Tcard {
    link: string
    desc: string
    href: string
    delay?: number
}
export default function ContactCard({link, desc, href, delay} :Tcard) {
    return (
        <div data-aos="fade-right" data-aos-delay={delay} className="flex justify-between items-center rounded-lg bg-white p-5">
            <div className="flex flex-col gap-2">
                <span className="text-gray-600 font-semibold">{desc}</span>
                <a className="font-bold text-gray-800 text-lg" href={href}>{link}</a>
            </div>
            <a href={href}><img src={arrow} alt="arrow"/></a>
        </div>
    )
}
