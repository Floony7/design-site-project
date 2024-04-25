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
