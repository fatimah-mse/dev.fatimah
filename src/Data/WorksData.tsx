import work1 from "../assets/Work Section/work-1.png"
import work2 from "../assets/Work Section/work-2.png"
import work3 from "../assets/Work Section/work-3.png"
import work4 from "../assets/Work Section/work-4.png"
import work5 from "../assets/Work Section/work-5.png"
import work6 from "../assets/Work Section/work-6.png"
import work7 from "../assets/Work Section/work-7.png"
import work8 from "../assets/Work Section/work-8.png"

interface Twork {
    title: string
    img: string
    link: string
}

export const WorkData : Array<Twork> = [
    {
        title: 'Panto',
        img: work1,
        link: "https://fatimah-mse.github.io/Panto/"
    },
    {
        title: 'iLanding',
        img: work2,
        link: "https://i-landing-chi.vercel.app/"
    },
    {
        title: 'Tuscany',
        img: work3,
        link: "https://tuscany.vercel.app/"
    },
    {
        title: 'Medicio',
        img: work4,
        link: "https://fatimah-mse.github.io/Medicio/"
    },
    {
        title: 'Villa',
        img: work5,
        link: "https://fatimah-mse.github.io/Villa/"
    },
    {
        title: 'Mealify',
        img: work6,
        link: "https://fatimah-mse.github.io/Mealify/"
    },
    {
        title: 'Daniels',
        img: work7,
        link: "https://fatimah-mse.github.io/Daniels/"
    },
    {
        title: 'Stream Social',
        img: work8,
        link: "https://fatimah-mse.github.io/stream-social/"
    },
]