import heroImg from "../assets/Hero/hero-flip-img.png"
import abs1 from "../assets/Hero/Abstract 1.png"
import abs2 from "../assets/Hero/Abstract 2.png"

export default function AboutHero() {
    return (
        <section className="4xl:px-[10%] xl:h-hero-lg h-hero-md max-768:h-full mt-[72px] max-992:mt-[67px] py-10 max-768:py-5 max-992:px-10 max-768:px-5 px-20 bg-mybg relative flex flex-wrap items-center max-768:flex-col gap-y-10 justify-between">
            <div data-aos="zoom-in" className="relativ w-45 max-768:w-full h-full bg-myPrimary rounded-3xl">
                <img className="w-1/2 max-768:relative absolute left-1/2 transform -translate-x-1/2 bottom-0 object-cover" src={heroImg} alt="hero-img" />
                <img className="absolute -top-1 left-0 w-1/3" src={abs1} alt="abs1" />
                <img className="absolute -bottom-1 -right-[1px] w-1/3" src={abs2} alt="abs1" />
            </div>
            <div data-aos="zoom-in" className="w-45 max-768:w-full flex flex-col gap-6 justify-center md:h-full">
                <h2 className="bg-mySecondary w-max px-4 py-2 rounded-lg text-white font-medium text-2xl">👋 Who Am I ?</h2>
                <p className="text-gray-800 font-semibold">Hi, I’m <strong className="font-merienda text-myPrimary font-extrabold text-lg leading-10">Fatimah Mse</strong> — a front-end developer with a strong passion for crafting user-centered and visually engaging web experiences. My journey into the world of web development began out of pure curiosity and a love for technology — and today, it has grown into a career I’m deeply passionate about.</p>
                <div className="bg-white px-5 py-4 rounded-lg w-full flex flex-wrap max-768:gap-8 justify-between">
                    <div className="w-45 max-768:w-full">
                        <span className="text-4xl font-bold text-gray-800">55 <span className="text-mySecondary">+</span></span>
                        <h3 className="text-base font-bold text-gray-800" >Completed Projects</h3>
                    </div>
                    <div className="w-45 max-768:w-full">
                        <span className="text-4xl font-bold text-gray-800">03 <span className="text-mySecondary">+</span></span>
                        <h3 className="text-base font-bold text-gray-800" >Years of Experience</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
