import { Quote } from "lucide-react";
import ArmelImg from "../../../assets/testimonials/armel.png";
import DorisImg from "../../../assets/testimonials/doris.png";
import ErwanImg from "../../../assets/testimonials/erwan.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Armel",
    role: "Membre",
    content:
      "Merci aux coach de m'avoir enseigné la patience et de m'avoir permis de retrouver confiance en moi.",
    image: ArmelImg,
  },
  {
    id: 2,
    name: "Doris",
    role: "Membre",
    content:
      "Je suis étonnée par la qualité en terme de relations humaines. Je retrouve le plaisir d'échanger avec d'autres clients.",
    image: DorisImg,
  },
  {
    id: 3,
    name: "Erwan",
    role: "Membre",
    content:
      "A 17 ans j'ai contracté la maladie de Lyme. Le sport m'a permis de trouver une force que je n'avais jamai eu avant.",
    image: ErwanImg,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex justify-center mb-6">
        <div className="flex justify-center mb-12">
          <Quote size={100} />
        </div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
          Ce qu'ils disent
        </h2>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
          Découvrez les témoignages de nos membres qui ont transformé leur vie
          avec La Salle du Temps
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-gray-400/20 group relative cursor-pointer bg-base-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 h-full min-h"
          >
            {/* Quote Icon */}
            <Quote className="text-gray-400/20 mb-6" />

            {/* Testimonial Content */}
            <p className="text-base-content mb-8 flex-grow">
              {testimonial.content}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-base-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base text-base-content">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 md:mt-16 text-center">
        <div className="bg-base-200 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4">
            Prêt à transformer votre vie?
          </h3>
          <p className="text-base md:text-lg text-neutral-500 mb-6 max-w-2xl mx-auto">
            Rejoignez des centaines de membres satisfaits et commencez votre
            parcours fitness aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn btn-lg btn-primary rounded-full px-12 hover:scale-105 transition-transform duration-300">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
