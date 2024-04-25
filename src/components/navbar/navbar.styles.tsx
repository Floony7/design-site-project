import { MdOutlineMenu } from "react-icons/md";
import styled from "styled-components";

export const NavStyles = styled.nav`
  width: 60%;
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    padding-left: none;
    width: 70%;
    display: flex;
    justify-content: space-evenly;

    li {
      color: white;
      font-size: 1rem;
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
      text-decoration-color: var(--clr-magenta-200);
    }
  }
`;

export const MobileNavStyles = styled.nav`
  width: 40vw;
  display: flex;
  align-items: center;
  background-color: var(--clr-gray-500);
  box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.4);

  ul {
    list-style: none;
    padding-left: 2rem;
    li {
      padding: 2px 0;
    }
  }

  a {
    color: var(--clr-slate-800);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: 600;

    &:hover,
    &:visited {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
      text-decoration-color: var(--clr-magenta-200);
    }
  }
`;

export const StyledHamburger = styled(MdOutlineMenu)`
  position: absolute;
  right: 2%;
  cursor: pointer;
`;
