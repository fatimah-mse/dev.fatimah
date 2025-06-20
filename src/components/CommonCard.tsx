export interface Tcard {
    isIcon?: boolean
    icon?: string
    title: string
    desc: string
    delay?: number
    width?: string
}


export default function CommonCard({ isIcon, icon, title, desc, delay, width }: Tcard) {
    return (
        <div data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-anchor-placement="top-bottom"
            className={`${width} max-992:w-48 max-576:w-full bg-white p-8 rounded-lg shadow-lg flex flex-col gap-5 ${isIcon ? 'items-center justify-center' : '' }`}
        >
            {isIcon && <img className="w-20 h-20 object-cover rounded-lg" src={icon} alt="icon" />}
            <h3 className={`${isIcon ? 'text-center' : 'text-mySecondary' } font-bold text-xl text-gray-800`}>{title}</h3>
            <p className={`${isIcon ? 'text-center' : '' } text-gray-800`}>{desc}</p>
        </div>
    )
}
