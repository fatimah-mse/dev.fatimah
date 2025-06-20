import { Link } from "react-router"

interface Tcard {
    delay: number
    title: string
    link: string
    img: string
}


export default function WorkCard({delay, title, link, img} :Tcard) {
    return (
        <div data-aos="fade-up"
            data-aos-delay={delay}
            className="w-[32%] max-992:w-48 max-576:w-full bg-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-5 max-w-[500px]">
            <h3 className="font-merienda font-extrabold text-myPrimary text-xl">{title}</h3>
            <span className="text-xs text-mySecondary font-semibold">Click on image to show the project</span>
            <Link
                to={link}
                target="_blank"
                className="w-full overflow-hidden"
            >
                <img className="w-full h-52 object-cover rounded-lg hover:scale-110 transition-all duration-700" src={img} alt={title} />
            </Link>
        </div>
    )
}
