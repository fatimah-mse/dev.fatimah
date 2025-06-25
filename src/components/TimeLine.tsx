import { TimelineData } from "../Data/TimelineData"
import TimeLineItem from "./TimeLineItem"


export default function TimeLine() {
    return (
        <div className="flex flex-col gap-6 h-full w-full transition-all duration-700 ease-in-out">
            <h2 data-aos="zoom-in" className="text-2xl text-center font-merienda text-myPrimary dark:text-mybg font-bold transition-all duration-700 ease-in-out">
                My Journey Timeline
            </h2>
            <div className="relative h-full w-full">
                <div className="h-full w-1 bg-gray-400 dark:border-mybg absolute rounded-lg top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out" />
                {TimelineData.map((item, index) => (
                    <TimeLineItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}
