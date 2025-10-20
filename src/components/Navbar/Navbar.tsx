import { NavbarCenter } from "./NavbarCenter";
import { NavbarLeft } from "./NavbarLeft";
import { NavbarRight } from "./NavbarRight";

export const Navbar = () => {
  return (
    <nav className="flex bg-transparent backdrop-blur z-10 rounded-2xl container fixed text-nowrap w-full p-4">
      {/* Navbar left */}
      <NavbarLeft />

      {/* Navbar center */}
      <NavbarCenter />

      {/* Navbar right */}
      <NavbarRight />
    </nav>
  );
};
