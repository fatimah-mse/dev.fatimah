import CommonCard, { type Tcard } from "./CommonCard"

export default function CommonHero({ icon, title, desc }: Tcard) {
    return (
        <section className="4xl:px-[10%] mt-[72px] max-992:mt-[67px] py-10 max-768:py-5 max-992:px-10 max-768:px-5 px-20 bg-mybg flex items-center justify-between">
            <CommonCard
                isIcon={true}
                icon={icon}
                title={title}
                desc={desc}
                width='!w-full h-full'
            />
        </section>
    )
}
