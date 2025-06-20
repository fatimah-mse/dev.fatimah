import type { Tcard } from "../components/CommonCard"
import github from "../assets/Footer/github.png"
import html from "../assets/Tools/html.png"
import css from "../assets/Tools/css.png"
import js from "../assets/Tools/js.png"
import ts from "../assets/Tools/Ts.png"
import bootstrap from "../assets/Tools/bootstrap.png"
import tailwind from "../assets/Tools/tailwind.png"
import react from "../assets/Tools/react.png"
import next from "../assets/Tools/next.png"

export const ToolsData: Array<Tcard> = [
    {
        icon: html,
        title: "HTML",
        desc: "Building dynamic web pages with semantic HTML structure, ensuring accessibility and SEO optimization by using proper tags and document flow."
    },
    {
        icon: css,
        title: "CSS",
        desc: "Styling responsive and visually appealing user interfaces with modern CSS techniques, including Flexbox, Grid, animations, and media queries."
    },
    {
        icon: js,
        title: "JavaScript ",
        desc: "Adding interactivity and functionality using vanilla JavaScript, handling DOM manipulation, events, and integrating APIs."
    },
    {
        icon: ts,
        title: "TypeScript ",
        desc: "Writing scalable and maintainable code with TypeScript by leveraging static typing, interfaces, and advanced tooling for robust front-end architecture."
    },
    {
        icon: bootstrap,
        title: "Bootstrap",
        desc: "Rapidly building responsive layouts using Bootstrap’s utility classes and pre-built components, ensuring mobile-first design and consistency."
    },
    {
        icon: tailwind,
        title: "Tailwind CSS",
        desc: "Crafting highly customizable and modern UI designs using Tailwind’s utility-first approach, allowing faster development and consistent styling."
    },
    {
        icon: react,
        title: "React.js",
        desc: "Developing component-based web applications using React, managing state with hooks, and building dynamic UIs with JSX and context API."
    },
    {
        icon: next,
        title: "Next.js",
        desc: "Using Next.js as a React framework while focusing exclusively on client-side rendering (CSR), leveraging features like routing, image optimization, and modular structure — without relying on server-side rendering or static site generation."
    },
    {
        icon: github,
        title: "Git & GitHub",
        desc: "Version control and collaboration through Git, managing repositories on GitHub, creating branches, pull requests, and handling project history efficiently."
    },
]