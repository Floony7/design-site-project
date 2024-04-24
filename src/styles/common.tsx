import styled from "styled-components";

// export const Main = styled.main`
//   width: 80vw;
//   max-width: 1920px;
// `;
export const SectionHeader = styled.h3`
  font-family: Raleway, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  color: black;
  line-height: 1;

  .gray {
    color: var(--clr-gray-700);
  }
`;

export const CtaLink = styled.a`
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
  text-decoration-color: var(--clr-magenta-200);
  color: var(--clr-gray-700);
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--clr-magenta-200);
    text-decoration-color: hotpink;
  }
`;
