import underHeroImg from "../../../assets/under-hero-img.jpg";

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-3xl mx-auto max-w-[1400px] my-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${underHeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
        {/* Main Heading */}
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white text-center leading-none tracking-tight">
            VOUS GUIDER, <br /> VOUS MOTIVER
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center text-center text-shadow  gap-8 flex-wrap">
          {/* Description Text */}
          <div className="max-w-lg">
            <p className="text-white text-base md:text-lg font-light leading-relaxed">
              Avec LA SALLE DU TEMPS, nous sommes là pour vous aider, vous
              guider et vous motiver à atteindre vos objectifs, et tout ça de
              façon illimitée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
