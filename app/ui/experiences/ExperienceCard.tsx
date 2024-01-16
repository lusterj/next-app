export default function ExperienceCard({
    title,
    coverImage,
    price,
    location,
}: {
    title: string,
    coverImage: string,
    price: string,
    location: string,

    }) {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img className="w-full" src={coverImage} alt={title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                  Price: {price}
                </p>
                <p className="text-gray-700 text-base">
                  Location: {location}
                </p>
              </div>
            </div>
          )
        }