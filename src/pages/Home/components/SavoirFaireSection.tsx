import { HandHeart, MapPin, Zap } from "lucide-react";

interface Expertise {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const expertises: Expertise[] = [
  {
    id: 1,
    title: "Aider",
    description: "Dès votre premier rendez-vous dans nos clubs, votre coach LA SALLE DU TEMPS est là pour vous accueillir. Son rôle et sa mission sont d'être à l'écoute de vos besoins et d'identifier vos problèmes. Que vous souhaitiez perdre du poids, prendre de la masse musculaire, des objectifs sportifs particuliers, des blessures ou une remise en forme, nos coachs s'occuperont de vous.",
    icon: <HandHeart size={40} strokeWidth={2.5} />
  },
  {
    id: 2,
    title: "Guider",
    description: "À la suite de votre séance d'essai, le coach va planifier votre programme d'entrainement en fonction de vos disponibilités, vos problématique et votre objectif. C'est le premier pas vers l'atteinte de vos objectifs, vous n'avez plus qu'à vous laisser guider.",
    icon: <MapPin size={40} strokeWidth={2.5} />
  },
  {
    id: 3,
    title: "Motiver",
    description: "Le coach sera la source qu'il vous manque. A chaque séance, à chaque série, à chaque mouvement, le coach est autour de vous pour motiver à accomplir vos objectifs.",
    icon: <Zap size={40} strokeWidth={2.5} />
  },
];

export const SavoirFaireSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-base-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
            Notre savoir-faire
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto">
            À LA SALLE DU TEMPS, nos coachs sont diplomés et formés spécialement chez nous pour vous aider, vous guider et vous motiver à atteindre vos objectifs.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {expertises.map((expertise) => (
            <div
              key={expertise.id}
              className="group relative bg-base-200 rounded-3xl p-8 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 text-primary group-hover:text-white transition-colors duration-300">
                {expertise.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
                {expertise.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed opacity-80">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="btn btn-lg btn-primary rounded-full px-12 hover:scale-105 transition-transform duration-300">
            Découvrir nos programmes
          </button>
        </div>
      </div>
    </section>
  );
};
