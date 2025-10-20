export interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
}

export interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

export const mainMenuItems: MenuItem[] = [
  {
    label: "Coaching perso",
    href: "/coaching-perso",
  },
  {
    label: "Témoignages",
    href: "/témoignages",
  },
  {
    label: "En savoir plus",
    submenu: [
      {
        label: "Notre histoire",
        href: "/notre-histoire",
        description: "Découvrez notre parcours",
      },
      {
        label: "Notre savoir-faire",
        href: "/notre-savoir-faire",
        description: "Nos compétences et expertise",
      },
      {
        label: "Nos garanties",
        href: "/nos-garanties",
        description: "Ce qui nous engage envers vous",
      },
      {
        label: "Contactez-nous",
        href: "/contact",
        description: "Entrez en contact avec notre équipe",
      },
    ],
  },
  {
    label: "Franchise",
    href: "/franchise",
  },
];
