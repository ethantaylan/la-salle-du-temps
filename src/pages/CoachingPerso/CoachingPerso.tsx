import { CheckCircle2, Play, XCircle } from "lucide-react";

// Video Testimonials Data
interface VideoTestimonial {
  id: number;
  names: string;
  quote: string;
  thumbnail: string;
  videoUrl: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    names: "Nalyk et Malika",
    quote: "C'est très personnalisé. On cible vraiment sur ce que moi je veux faire !",
    thumbnail: "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "#",
  },
  {
    id: 2,
    names: "JS et Rimeh",
    quote: "LA SALLE DU TEMPS, c'est la meilleure salle !",
    thumbnail: "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "#",
  },
  {
    id: 3,
    names: "Giggs, Peggy et Didier",
    quote: "Un cadre sécurisé, où on peut s'améliorer en s'éclatant.",
    thumbnail: "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "#",
  },
  {
    id: 4,
    names: "Baba et Yves",
    quote: "Une salle où tu progresses et où tu récupères de l'estime de toi, de la santé et du courage !",
    thumbnail: "https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "#",
  },
  {
    id: 5,
    names: "Inès et Clara",
    quote: "Allez-y ! C'est un super format, vous allez vous éclater.",
    thumbnail: "https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "#",
  },
  {
    id: 6,
    names: "Jojo et Tim",
    quote: "Si je ne viens pas pendant 3 ou 4 jours, je ne me sens pas bien !",
    thumbnail: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "#",
  },
];

export const CoachingPerso = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-base-100 px-4">
        <div className="max-w-[1400px] mx-auto text-center py-16 md:py-24">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight">
              Ton Coach Perso
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-primary">
              En Illimité
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
              Sans Engagement
            </h3>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              Nous voulons que toutes les personnes qui ont soif de changement et qui sont motivées,
              bénéficient d'une <span className="font-black text-primary">OFFRE EXCEPTIONNELLE ET UNIQUE.</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl mt-6 text-neutral-600">
              Pour pouvoir accéder à l'un de nos clubs, nous allons déterminer lors de votre première séance
              si vous avez le profil d'un membre de <span className="font-bold">LA SALLE DU TEMPS.</span>
            </p>
          </div>

          <div className="mt-12">
            <button className="btn btn-lg btn-primary rounded-full px-16 hover:scale-105 transition-transform duration-300">
              Réserver ma séance d'essai
            </button>
          </div>
        </div>
      </section>

      {/* Tu hésites? Section */}
      <section className="py-16 md:py-24 bg-base-200 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-12 text-center">
            Tu hésites ? Lis ça.
          </h2>

          <div className="bg-base-100 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Tu as déjà essayé une salle classique ?
            </h3>

            <p className="text-lg md:text-xl mb-6">
              Tu n'es pas le seul.
            </p>

            <p className="text-lg md:text-xl mb-8 font-semibold">
              On l'a tous fait :
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Des machines alignées, des abonnements à 39€/mois… Mais au fond, tu es livré à toi-même.",
                "Personne pour vraiment t'expliquer.",
                "Un coach \"dispo\", mais rarement là au bon moment.",
                "Des programmes génériques.",
                "Des regards parfois pesants.",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="text-error flex-shrink-0 mt-1" size={24} />
                  <p className="text-base md:text-lg">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl font-semibold mt-8">
              Et toi, tu essaies… mais tu finis par lâcher.
            </p>
            <p className="text-base md:text-lg text-neutral-600 mt-4">
              Pas par manque de volonté, mais parce que <span className="font-bold text-error">personne ne t'a vraiment accompagné.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Nous, on fait autrement */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-12 text-center text-primary">
            Nous, on fait autrement.
          </h2>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Chez LA SALLE DU TEMPS, tout commence autrement :
            </h3>

            <div className="space-y-6">
              {[
                "Un coach t'accueille dès la première séance.",
                "Il t'écoute, te comprend, te coache.",
                "Il reste à tes côtés à chaque séance, pour corriger, ajuster, te motiver.",
                "Il te crée un vrai programme personnalisé — fait pour ton corps, ton emploi du temps, ton mental.",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={28} strokeWidth={2.5} />
                  <p className="text-lg md:text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 md:p-8 bg-base-100 rounded-2xl">
              <p className="text-xl md:text-2xl font-bold text-center mb-4">
                Ce n'est pas un cours collectif.
              </p>
              <p className="text-xl md:text-2xl font-bold text-center mb-4">
                Ce n'est pas du libre-service.
              </p>
              <p className="text-2xl md:text-3xl font-black text-center text-primary">
                C'est du coaching pour toi. Vraiment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le vrai problème */}
      <section className="py-16 md:py-24 bg-base-200 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Le vrai problème, ce n'est pas ta motivation.
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              C'est que personne ne te suit vraiment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Personne ne te pousse quand tu ralentis.",
              "Personne ne prend le temps de comprendre ton corps, tes contraintes, ton mental.",
              "Personne ne te suit vraiment dans ta progression.",
            ].map((text, index) => (
              <div key={index} className="bg-base-100 rounded-2xl p-6 md:p-8 text-center">
                <p className="text-lg md:text-xl font-semibold">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              Chez LA SALLE DU TEMPS, on a tout changé.
            </h3>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl font-semibold">
                Ici, tu ne seras jamais un inconnu.
              </p>
              <p className="text-lg md:text-xl">
                Dès ta première séance, tu seras accueilli par un coach diplômé qui te suivra, te corrigera, te motivera.
              </p>
              <div className="space-y-3 mt-8">
                <p className="text-lg md:text-xl font-bold">✗ Pas de machines en libre-service.</p>
                <p className="text-lg md:text-xl font-bold">✗ Pas de programmes génériques.</p>
                <p className="text-xl md:text-2xl font-black mt-6">
                  ✓ Juste toi, ton objectif, et un coach qui t'aidera à l'atteindre.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Une vraie chance de transformer ton corps et ton mental !
            </h3>
            <p className="text-xl md:text-2xl text-neutral-600">
              Ce qu'on vous propose ?
            </p>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              Une vraie chance de transformer votre corps, votre mental, et surtout... votre rapport à vous-même.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-12 text-center">
            Ils en parlent mieux que nous
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Thumbnail */}
                <div className="relative h-64 md:h-72">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Play className="text-white ml-1" size={32} fill="white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-base-100 p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-2">{testimonial.names}</h4>
                  <p className="text-sm md:text-base text-neutral-600 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-base-200 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-center">
            Notre Abonnement
          </h2>
          <p className="text-lg md:text-xl text-center text-neutral-600 mb-12">
            Un investissement dans votre santé et votre bien-être
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Avec engagement */}
            <div className="bg-base-100 rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-sm font-bold uppercase text-neutral-500 mb-2">Avec engagement 1 an</div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">59€</div>
                <div className="text-xl text-neutral-600">par semaine</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold">+ 59€ de frais d'inscription</p>
              </div>
            </div>

            {/* Sans engagement */}
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-primary px-4 py-2 rounded-full text-xs font-black uppercase">
                Plus flexible
              </div>
              <div className="text-center mb-6">
                <div className="text-sm font-bold uppercase mb-2 opacity-90">Sans engagement</div>
                <div className="text-5xl md:text-6xl font-black mb-2">79€</div>
                <div className="text-xl opacity-90">par semaine</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold">+ 59€ de frais d'inscription</p>
              </div>
            </div>
          </div>

          {/* Ce qui est inclus */}
          <div className="bg-base-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 text-center">
              Ce qui est inclus
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Le coach est avec toi sur chaque séance",
                "Accès illimité (sur réservation via notre application)",
                "Séances de 45 minutes",
                "Programme personnalisé sur 3 mois",
                "Suivi et correction en temps réel",
                "Bilan complet tous les 3 mois",
                "Accompagnement jusqu'à 3 personnes max par coach",
                "Ouvert 7j/7 de 8h à 21h",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} strokeWidth={2.5} />
                  <p className="text-base md:text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4">Comment ça marche ?</h4>
              <div className="space-y-4">
                <p className="text-base md:text-lg">
                  <span className="font-bold text-primary">1. Première séance :</span> Le coach t'explique tout et évalue tes objectifs.
                </p>
                <p className="text-base md:text-lg">
                  <span className="font-bold text-primary">2. Programme personnalisé :</span> Créé sur 3 mois, adapté à ton corps et ton emploi du temps.
                </p>
                <p className="text-base md:text-lg">
                  <span className="font-bold text-primary">3. Suivi régulier :</span> Le coach t'accompagne, te corrige et te motive à chaque séance.
                </p>
                <p className="text-base md:text-lg">
                  <span className="font-bold text-primary">4. Bilan & nouveau programme :</span> Tous les 3 mois, on fait le point et on repart de plus belle.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-base md:text-lg text-neutral-600 mb-2">
                Tu seras toujours suivi par les mêmes coachs, pour garantir un suivi cohérent et personnalisé.
              </p>
              <p className="text-sm md:text-base text-neutral-500 italic">
                Le coach accompagne jusqu'à 3 personnes maximum en même temps — mais ce n'est pas un cours collectif :
                chacun suit son propre programme.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-12 text-center">
            <button className="btn btn-lg btn-primary rounded-full px-16 hover:scale-105 transition-transform duration-300">
              Je commence maintenant
            </button>
            <p className="mt-4 text-sm text-neutral-500">
              Première séance d'essai pour valider ton profil
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Prêt à transformer ta vie ?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Rejoins LA SALLE DU TEMPS et bénéficie d'un coaching personnalisé qui change vraiment la donne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none rounded-full px-12 hover:scale-105 transition-transform duration-300">
                Réserver ma séance d'essai
              </button>
              <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary rounded-full px-12 hover:scale-105 transition-transform duration-300">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
