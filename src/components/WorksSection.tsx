import { Link } from "react-router"
import { WorkData } from "../Data/WorksData"
import TitleComponent from "./TitleComponent"
import WorkCard from "./WorkCard"

export default function WorksSection() {
    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg'>
            <TitleComponent data-aos="fade-down" title='My Works' desc="By partnering with me for your front-end development needs, you'll gain" />
            <div className='flex flex-wrap justify-between gap-y-8 max-576:gap-y-5 my-16 max-768:my-10'>
                {WorkData.slice(0,3).map((e, index) => {
                    return (
                        <WorkCard 
                            key={index}
                            delay={(index*100) + 250}
                            title={e.title}
                            link={e.link}
                            img={e.img}
                        />
                    )
                })}
            </div>
            <Link data-aos="zoom-out" className="px-5 py-3 rounded-lg w-max mx-auto block bg-myPrimary text-white hover:opacity-80 transition-all duration-500" to={"/portfolio"}>View All Projects</Link>
        </section>
    )
}
