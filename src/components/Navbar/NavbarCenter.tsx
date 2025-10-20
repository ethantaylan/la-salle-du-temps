import { NavLink } from "react-router-dom";
import { mainMenuItems } from "../../constants/menus";
import { Dropdown } from "../Dropdown";

export const NavbarCenter = () => {
  return (
    <ul className="w-full items-center flex justify-center gap-4">
      {mainMenuItems.map((item) =>
        item.submenu ? (
          <Dropdown key={item.href} title={item.label} items={item.submenu} />
        ) : (
          <li key={item.href}>
            <NavLink to={item.href || ""} className="btn btn-ghost rounded-full hover:bg-gray-200/50">
              {item.label}
            </NavLink>
          </li>
        )
      )}
    </ul>
  );
};
