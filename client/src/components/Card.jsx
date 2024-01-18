export default function Card({ title, description, image }) {
    return (
        <div className="flex flex-col-reverse md:flex-row mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-base sm:text-xl font-bold">{title}</h2>
                <p className="text-xs sm:text-gray-600">{description}</p>
            </div>
            <img className="w-full md:w-1/2 h-full object-scale-down" src={image} alt={title} />
        </div>
    )
}