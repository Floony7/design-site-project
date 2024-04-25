import { useState } from "react";
import { navLinks } from "../../data/mock";
import { MobileNavStyles, StyledHamburger } from "./navbar.styles";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Hamburger = (
    <StyledHamburger
      size="30px"
      color="black"
      onClick={() => setIsOpen((prev) => !prev)}
    />
  );

  return (
    <>
      {Hamburger}
      {isOpen ? (
        <MobileNavStyles>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href="#">{link.name}</a>
              </li>
            ))}
          </ul>
        </MobileNavStyles>
      ) : null}
    </>
  );
};
