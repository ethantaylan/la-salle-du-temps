interface GymSpace {
  id: number;
  location: string;
  image: string;
}

const gymSpaces: GymSpace[] = [
  {
    id: 1,
    location: "Asnières-Sur-Seine",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    location: "Paris La Défense",
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    location: "Clichy",
    image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    location: "Daumesnil",
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    location: "Alésia",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const GymSpacesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
          Nos Salles
        </h2>
        <button className="flex items-center gap-2 text-sm md:text-base font-semibold uppercase hover:gap-3 transition-all duration-300">
          Voir tout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Gym Spaces Grid */}
      <div className="grid gap-4 md:gap-6">
        {gymSpaces.map((space) => (
          <div
            key={space.id}
            className="relative group h-[200px] md:h-[220px] rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${space.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-between px-8 md:px-12">
              <div className="max-w-md">
                <div className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-1">
                  LSDT
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                  {space.location}
                </h3>
              </div>

              {/* Arrow Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
