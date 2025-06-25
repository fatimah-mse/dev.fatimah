import { Link } from "react-router"

interface Tcard {
    delay: number
    title: string
    link: string
    img: string
}


export default function WorkCard({ delay, title, link, img }: Tcard) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="w-[32%] max-992:w-48 max-576:w-full bg-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-5 max-w-[500px] dark:bg-slate-600 transition-all duration-700 ease-in-out"
        >
            <h3 className="font-merienda font-extrabold text-myPrimary text-xl dark:text-mybg transition-all duration-700 ease-in-out">
                {title}
            </h3>
            <span className="text-xs text-mySecondary font-semibold dark:text-mybg transition-all duration-700 ease-in-out">
                Click on image to show the project
            </span>
            <Link to={link} target="_blank" className="w-full overflow-hidden rounded-lg">
                <img
                    className="w-full h-52 object-cover rounded-lg hover:scale-110 transition-all duration-700 ease-in-out"
                    src={img}
                    alt={title}
                />
            </Link>
        </div>
    )
}
