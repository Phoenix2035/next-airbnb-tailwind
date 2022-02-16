import Image from "next/image"

const LargeCard = ({ img, title, description, btnText }) => {
    return (
        <section className="relative py-16 px-4 ">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} className="rounded-2xl " layout="fill" objectFit="cover" alt={title} />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="w-64 text-4xl mb-3 select-none">{title}</h3>
                <p className="select-none">{description}</p>
                <button className="text-sm text-white bg-gray-900 transition duration-200 hover:text-gray-900 hover:bg-white px-4 py-2 rounded-lg mt-5 active:scale-95">{btnText}</button>
            </div>
        </section>
    )
}

export default LargeCard