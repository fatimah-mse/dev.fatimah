import facebook from "../assets/Footer/facebook.png"
import github from "../assets/Footer/github.png"
import linkedIn from "../assets/Footer/linkedIn.png"

interface Tlinks {
    img: string
    link: string
}

export const FooterSocialData : Array<Tlinks> = [
    {
        img: facebook,
        link: "https://www.facebook.com/fatimah.mse.750983"
    },
    {
        img: github,
        link: "https://github.com/fatimah-mse"
    },
    {
        img: linkedIn,
        link: "https://www.linkedin.com/in/fatimah-mselmani/"
    }
]