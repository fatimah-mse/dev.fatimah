import { WorkData } from "../Data/WorksData"
import WorkCard from "./WorkCard"


export default function AllWorks() {
    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg'>
            <span data-aos="fade-right" className="bg-mySecondary w-max px-4 py-2 rounded-lg text-white font-medium text-2xl block mx-auto">🎨 My Works</span>
            <div className='flex flex-wrap justify-between gap-y-8 max-576:gap-y-5 my-16 max-768:my-10'>
                {WorkData.map((e, index) => {
                    return (
                        <WorkCard
                            key={index}
                            delay={(index * 100) + 250}
                            title={e.title}
                            link={e.link}
                            img={e.img}
                        />
                    )
                })}
            </div>
        </section>
    )
}
