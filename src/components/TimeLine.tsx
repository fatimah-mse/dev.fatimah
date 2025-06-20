import { TimelineData } from "../Data/TimelineData"
import TimeLineItem from "./TimeLineItem"


export default function TimeLine() {
    return (
        <div className="flex flex-col gap-6 h-full w-full">
            <h2 data-aos="zoom-in" className="text-2xl text-center font-merienda text-myPrimary font-bold">My Journey Timeline</h2>
            <div className="relative h-full w-full">
                <div className="h-full w-1 bg-gray-400 absolute rounded-lg top-0 left-1/2 transform -translate-x-1/2"></div>
                {TimelineData.map((item, index) => (
                    <TimeLineItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}
