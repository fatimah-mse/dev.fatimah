export interface Ttimeline {
    year: string
    title: string
    description: string
    color: string
    aosLeft: string
    aosRight: string
    reverse: boolean
}

export default function TimeLineItem({ year, title, description, color, reverse, aosLeft, aosRight }: Ttimeline) {
    return (
        <div className="relative w-full my-5 transition-all duration-700 ease-in-out">
            <div className={`${color} w-6 h-6 rounded-full border-4 border-white dark:border-mybg shadow-md md:top-1/2 left-1/2 transform -translate-x-1/2 md:absolute max-768:relative max-768:mt-10 transition-all duration-700 ease-in-out`} />       
            <div className={`flex justify-between ${reverse ? 'flex-row-reverse' : ''} items-center md:mt-10 mt-5 max-768:flex-col max-768:justify-center max-768:gap-y-10 transition-all duration-700 ease-in-out`}>        
                <div data-aos={aosLeft} className={`w-45 ${reverse ? 'text-left' : 'text-right'} max-768:text-center transition-all duration-700 ease-in-out`}>
                    <span className="text-sm text-gray-500 md:mt-6 px-3 py-2 rounded-lg bg-white dark:bg-slate-600 dark:text-mybg font-bold font-merienda transition-all duration-700 ease-in-out">
                        {year}
                    </span>
                </div>
                <div data-aos={aosRight} className="w-45 max-768:w-full px-4 py-5 rounded-lg bg-white dark:bg-slate-600 max-768:text-center transition-all duration-700 ease-in-out">
                    <h3 className="text-lg text-gray-800 dark:text-mybg font-bold mb-2 transition-all duration-700 ease-in-out">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-mybg transition-all duration-700 ease-in-out">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
