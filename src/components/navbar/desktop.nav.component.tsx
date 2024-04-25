import { navLinks } from "../../data/mock";
import { NavStyles } from "./navbar.styles";

export const DesktopNav = () => {
  return (
    <NavStyles>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
};
