import TitleComponent from './TitleComponent'
import CommonCard from './CommonCard'
import { ToolsData } from '../Data/ToolsData'

export default function AboutSkills() {
    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg'>
            <TitleComponent data-aos="fade-down" title='Tools & Technologies' desc='Here are some of the tools and technologies I work with' />
            <div className='flex flex-wrap justify-between gap-y-8 max-576:gap-y-5 mt-16 max-768:mt-10'>
                {ToolsData.map((e, index) => {
                    return (
                        <CommonCard key={index}
                            isIcon={true}
                            icon={e.icon}
                            title={e.title}
                            desc={e.desc}
                            delay={(index * 100) + 250}
                            width='w-[32%] max-w-[500px]'
                        />
                    )
                })}
            </div>
        </section>
    )
}
