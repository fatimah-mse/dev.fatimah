import TimeLine from "./TimeLine";


export default function JourneySection() {
    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg dark:bg-slate-800 flex flex-col gap-6 overflow-hidden transition-all duration-700 ease-in-out'>
            <h2 data-aos="fade-right" className="bg-mySecondary w-max px-4 py-2 rounded-lg text-white font-medium text-2xl transition-all duration-700 ease-in-out">🚀 My Journey</h2>
            <p data-aos="fade-right" data-aos-delay="300" className="text-gray-800 font-semibold dark:text-mybg transition-all duration-700 ease-in-out">
                I’m a self-taught developer who took the initiative to learn web development from the ground up. Through countless hours of online courses, personal projects, and continuous practice, I built a strong foundation in front-end technologies.
                In 2024, I had the opportunity to train and work with <strong className="font-merienda text-myPrimary dark:text-mySecondary font-extrabold text-lg leading-10 transition-all duration-700 ease-in-out">Focal X</strong>, where I applied my skills in real-world projects, collaborated with teams, and deepened my understanding of web development best practices.
            </p>
            <TimeLine />
        </section>
    )
}
