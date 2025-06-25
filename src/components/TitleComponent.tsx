interface Ttitle {
    title: string
    desc: string
}

export default function TitleComponent({ title, desc }: Ttitle) {
    return (
        <>
            <h1
                data-aos="fade-down"
                className="text-center text-4xl max-768:text-2xl text-myPrimary dark:text-mybg font-merienda font-extrabold mb-5 transition-all duration-700 ease-in-out"
            >
                {title}
            </h1>
            <p
                data-aos="fade-down"
                data-aos-delay="100"
                className="text-center text-xl max-768:text-base text-gray-800 dark:text-mybg font-semibold mb-5 transition-all duration-700 ease-in-out"
            >
                {desc}
            </p>
        </>
    )
}
