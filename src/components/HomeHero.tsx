import heroImg from "../assets/Hero/hero-img.png"
import abs1 from "../assets/Hero/Abstract 1.png"
import abs2 from "../assets/Hero/Abstract 2.png"
import contact from "../assets/Footer/call.png"
import download from "../assets/Hero/download-icon.png"

export default function HomeHero() {

        return (
            <section className="dark:bg-slate-800 4xl:px-[10%] xl:h-hero-lg h-hero-md max-768:h-full mt-[72px] max-992:mt-[67px] py-10 max-768:py-5 max-992:px-10 max-768:px-5 px-20 bg-mybg relative flex flex-wrap items-center max-768:flex-col-reverse gap-y-10 justify-between transition-all duration-700 ease-in-out">
                <div data-aos="zoom-in" className="w-45 max-768:w-full flex flex-col gap-4 justify-center md:h-full">
                    <span className="bg-mySecondary w-max px-4 py-2 rounded-lg text-white font-medium text-lg">Hello There 🤗</span>
                    <h1 className="dark:text-mybg transition-all duration-700 ease-in-out text-[44px] max-768:text-3xl text-myPrimary font-merienda font-extrabold">Fatimah Mse Welcome’s You!</h1>
                    <p className="dark:text-mybg transition-all duration-700 ease-in-out font-bold text-gray-800 text-sm">I am a passionate and experienced front-end developer dedicated to building interactive and seamless web experiences. I possess strong skills in translating designs into clean and efficient code, with a focus on high performance and user-friendliness. Explore my portfolio to see how technical expertise contributes to creating engaging and functional user interfaces</p>
                    <div className="flex  items-start gap-5">
                        <a target="_blank" href="https://drive.google.com/file/d/1LjqTxZNcGsxqEdX9x9-d2o7NYoBn0ZdK/view?usp=sharing" className="dark:bg-slate-800 transition-all duration-700 ease-in-out bg-myPrimary flex w-max px-4 py-2 rounded-lg gap-2">
                            <span className="text-white">Download CV</span>
                            <img src={download} alt="download-icon" />
                        </a>
                        <div className="flex w-max py-2  gap-2">
                            <img src={contact} alt="download-icon" />
                            <a href="tel: +963981944215" className="dark:text-mybg transition-all duration-700 ease-in-out text-mySecondary font-bold">Contact Me</a>
                        </div>
                    </div>
                    <div className="dark:bg-zinc-600 transition-all duration-700 ease-in-out bg-white px-5 py-4 rounded-lg w-full flex flex-wrap max-768:gap-8 justify-between">
                        <div className="w-45 max-768:w-full">
                            <span className="text-4xl font-bold text-gray-800 dark:text-mybg transition-all duration-700 ease-in-out">55 <span className="text-mySecondary">+</span></span>
                            <h3 className="text-base font-bold text-gray-800 dark:text-mybg transition-all duration-700 ease-in-out" >Completed Projects</h3>
                        </div>
                        <div className="w-45 max-768:w-full">
                            <span className="text-4xl font-bold text-gray-800 dark:text-mybg transition-all duration-700 ease-in-out">03 <span className="text-mySecondary">+</span></span>
                            <h3 className="text-base font-bold text-gray-800 dark:text-mybg transition-all duration-700 ease-in-out" >Years of Experience</h3>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="relativ w-45 max-768:w-full h-full bg-myPrimary rounded-3xl overflow-hidden dark:bg-slate-800 transition-all duration-700 ease-in-out">
                    <img className="w-1/2 max-768:relative absolute left-1/2 transform -translate-x-1/2 bottom-0 object-cover" src={heroImg} alt="hero-img" />
                    <img className="absolute -top-1 left-0 w-1/3" src={abs1} alt="abs1" />
                    <img className="absolute -bottom-1 -right-[1px] w-1/3" src={abs2} alt="abs1" />
                </div>
            </section>
        )
    }
