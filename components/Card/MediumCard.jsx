import Image from "next/image"

const MediumCard = ({ img, title }) => {
    return (
        <div className="cursor-pointer hover:scale-95 transform transition duration-300 ease-out select-none ">
            <div className="relative w-80 h-80 lg:w-64 lg:h-64">
                <Image src={img} layout="fill" alt={title} className="rounded-xl" />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard