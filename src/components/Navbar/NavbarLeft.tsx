import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const NavbarLeft = () => {
  return (
    <div className="w-full flex items-center">
      <NavLink to="/">
        <img width={100} src={Logo} alt="Logo" />
      </NavLink>
    </div>
  );
};
