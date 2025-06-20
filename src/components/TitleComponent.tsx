interface Ttitle {
    title: string
    desc: string
}

export default function TitleComponent({ title, desc }: Ttitle) {
    return (
        <>
            <h1 data-aos="fade-down" className="text-center text-4xl max-768:text-2xl text-myPrimary font-merienda font-extrabold mb-5">{title}</h1>
            <p data-aos="fade-down" className="text-center text-xl max-768:text-base text-gray-800 font-semibold mb-5">{desc}</p>
        </>
    )
}
