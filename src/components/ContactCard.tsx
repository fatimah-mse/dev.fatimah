import arrow from "../assets/contact/arrow.png"

export interface Tcard {
    link: string
    desc: string
    href: string
    delay?: number
}
export default function ContactCard({ link, desc, href, delay }: Tcard) {
    return (
        <div
            data-aos="fade-right"
            data-aos-delay={delay}
            className="flex justify-between items-center rounded-lg bg-white p-5 dark:bg-slate-600 transition-all duration-700 ease-in-out"
        >
            <div className="flex flex-col gap-2">
                <span className="text-gray-600 font-semibold dark:text-mybg transition-all duration-700 ease-in-out">
                    {desc}
                </span>
                <a
                    className="font-bold text-gray-800 text-lg dark:text-mybg transition-all duration-700 ease-in-out"
                    href={href}
                >
                    {link}
                </a>
            </div>
            <a href={href}>
                <img
                    src={arrow}
                    alt="arrow"
                    className="w-10 h-10 transition-all duration-700 ease-in-out"
                />
            </a>
        </div>
    )
}
