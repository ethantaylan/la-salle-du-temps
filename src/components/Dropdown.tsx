import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SubMenuItem } from "../constants/menus";

type Props = {
  title: string;
  items: SubMenuItem[];
};

export const Dropdown = ({ title, items }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOutsideClick = (event: MouseEvent) => {
    const dropdownElement = document.querySelector(".dropdown");
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost rounded-full hover:bg-gray-200/50">
        {title} <ChevronDown size={16} />
      </button>
      {isOpen && (
        <ul
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-1"
        >
          {items.map((item, index) => (
            <li key={index}>
              <NavLink to={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
