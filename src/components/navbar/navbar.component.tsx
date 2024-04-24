import { navLinks } from "../../data/mock";
import { NavStyles } from "./navbar.styles";

export const Navbar = () => {
  return (
    <NavStyles>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>{link.name}</li>
        ))}
      </ul>
    </NavStyles>
  );
};
