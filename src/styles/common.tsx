import styled from "styled-components";

// export const Main = styled.main`
//   width: 80vw;
//   max-width: 1920px;
// `;
export const SectionHeader = styled.h3`
  font-family: Raleway, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  color: black;
  line-height: 1;

  @media only screen and (max-width: var(--width-lg)) {
    font-size: 3rem;
  }

  .gray {
    color: var(--clr-slate-700);
  }
`;

export const CtaLink = styled.a`
  text-decoration: underline;
  padding: 5px 5px 5px 2px;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
  text-decoration-color: var(--clr-magenta-200);
  box-shadow: inset 0 0 0 0 var(--clr-magenta-200);
  color: var(--clr-gray-700);
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    text-decoration-color: transparent;
    box-shadow: inset 200px 0 0 0 var(--clr-magenta-200);
  }
`;

export const Lead = styled.p`
  margin-bottom: 2.5rem;
  color: var(--clr-slate-700);
`;
