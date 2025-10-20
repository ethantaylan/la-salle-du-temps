import { NavLink } from "react-router-dom";

export const CommunitySection = () => {
  const menuLinks = [
    {
      title: "Coaching perso",
      href: "/coaching-perso",
    },
    {
      title: "Contactez-nous",
      href: "/contact",
    },
    {
      title: "Notre histoire",
      href: "/notre-histoire",
    },
    {
      title: "Notre savoir-faire",
      href: "/notre-savoir-faire",
    },
    {
      title: "Nos garanties",
      href: "/nos-garanties",
    },
    {
      title: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
    {
      title: "Mentions légales",
      href: "/mentions-legales",
    },
    {
      title: "Conditions générales de vente",
      href: "/conditions-generales",
    },
    {
      title: "Politique de cookies",
      href: "/politique-cookies",
    },
  ];

  return (
    <footer>
      <div className="bg-black text-white py-16 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-16">
            {/* Left Side - CTA */}
            <div className="max-w-[600px]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Commençons à travailler ensemble
              </h3>
              <button className="btn btn-lg bg-white text-black rounded-full px-10 hover:bg-white/90 hover:scale-105 transition-all duration-300 border-0">
                @lasalledutempsfr
              </button>
            </div>

            {/* Right Side - Menu Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 lg:ml-auto">
              {menuLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.href}
                  className="text-base hover:text-gray-500 transition-colors duration-300"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-black pb-2">
        <p className="text-sm text-white/60">
          © 2025 LA SALLE DU TEMPS. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
