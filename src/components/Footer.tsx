import { Link } from "react-router"
import { NavData } from "../Data/NavData"
import { FooterSocialData } from "../Data/FooterData"
import email from "../assets/Footer/email.png"
import call from "../assets/Footer/call.png"
import location from "../assets/Footer/location.png"

export default function Footer() {
    return (
        <footer className='4xl:px-[10%] py-10 max-768:py-8 max-992:px-10 max-768:px-5 px-20 bg-myPrimary flex flex-col gap-y-8 dark:bg-slate-800 transition-all duration-700 ease-in-out dark:border-t-2 dark:border-mybg'>
            <div className="flex max-992:flex-col justify-between gap-8">
                <h1 className='text-white dark:text-mybg transition-all duration-700 ease-in-out font-merienda text-2xl max-768:text-xl font-bold'>Fatimah Mse</h1>
                <ul className='flex flex-wrap gap-6 max-768:gap-3'>
                    {NavData.map((e, index) => {
                        return (
                            <li key={index} className="max-768:w-45">
                                <Link
                                    to={e.link}
                                    className="font-semibold text-white dark:text-mybg transition-all duration-700 ease-in-out"
                                >
                                    {e.item}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex gap-3">
                    {FooterSocialData.map((link, index) => {
                        return (
                            <a
                                key={index}
                                href={link.link}
                            >
                                <img
                                    className="w-8 rounded-md"
                                    src={link.img}
                                    alt="icon" />
                            </a>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-wrap max-768:flex-col max-768:!items-start justify-center items-center gap-6">
                <a
                    target="_blank"
                    className="flex gap-1"
                    href="mailto: fatimahmse83@gmail.com"
                >
                    <img className="w-6" src={email} alt="email" />
                    <span className="text-white dark:text-mybg transition-all duration-700 ease-in-out font-semibold">fatimahmse83@gmail.com</span>
                </a>
                <span className="w-[2px] h-6 bg-white rounded-lg max-768:hidden"></span>
                <a
                    target="_blank"
                    className="flex gap-1"
                    href="tel: +963981944215"
                >
                    <img className="w-6" src={call} alt="call" />
                    <span className="text-white dark:text-mybg transition-all duration-700 ease-in-out font-semibold">+963 981 944 215</span>
                </a>
                <span className="w-[2px] h-6 bg-white rounded-lg max-768:hidden"></span>
                <a
                    target="_blank"
                    className="flex gap-1"
                    href="https://www.google.com/maps/place/Jableh,+Syria/@35.3600037,35.9295846,14z/data=!3m1!4b1!4m6!3m5!1s0x1523fe3a68bf33eb:0xe07c09df6304fdfe!8m2!3d35.3614713!4d35.9267389!16zL20vMDg5Y3Jz?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                >
                    <img className="w-6" src={location} alt="location" />
                    <span className="text-white dark:text-mybg transition-all duration-700 ease-in-out font-semibold">Jableh, Latakia, Syria</span>
                </a>

            </div>
            <h5 className="text-white dark:text-mybg transition-all duration-700 ease-in-out font-merienda font-bold text-center text-lg max-768:text-base pt-4 border-t-2 border-white">Copyright © 2025 Fatimah Mse. All rights reserved.</h5>
        </footer>
    )
}
