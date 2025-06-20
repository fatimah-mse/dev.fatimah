import { BenefitsCardData } from '../Data/BenefitsData'
import CommonCard from './CommonCard'
import TitleComponent from './TitleComponent'

export default function BenefitsSection() {
    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg'>
            <TitleComponent data-aos="fade-down" title='Benefits' desc="By partnering with me for your front-end development needs, you'll gain" />
            <div className='flex flex-wrap justify-between gap-y-8 max-576:gap-y-5 mt-16 max-768:mt-10'>
                {BenefitsCardData.map((e, index) => {
                    return (
                        <CommonCard key={index}
                            isIcon={false}
                            title={e.title}
                            desc={e.desc}
                            delay={(index * 100) + 250}
                            width={e.width}
                        />
                    )
                })}
            </div>
        </section>
    )
}
