import { Hourglass } from "lucide-react";

export const AccessibilitySection = () => {
  return (
    <section className="py-20 md:py-28 bg-base-100">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Decorative Star Icon */}
        <div className="flex justify-center mb-12">
          <Hourglass size={100} />
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight mb-8 tracking-tight">
          LE FITNESS DOIT ÊTRE
          <br />
          ACCESSIBLE À TOUS.
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Que vous soyez un athlète confirmé ou que vous débutiez, nous avons
          une variété d'équipements et de cours adaptés à vos besoins. Nos
          machines de cardio, équipements de musculation et espaces
          d'entraînement fonctionnel offrent une expérience d'entraînement
          complète.
        </p>

        {/* CTA Button */}
        <button className="btn btn-outline btn-lg rounded-full px-10 font-semibold uppercase tracking-wide hover:btn-primary transition-all duration-300">
          Je me lance
        </button>
      </div>
    </section>
  );
};
