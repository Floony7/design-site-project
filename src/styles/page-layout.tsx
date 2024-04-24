import styled from "styled-components";

type BgColors = "white" | "gray";

type ColorProps = { bgColor?: BgColors };

export const FullWidthSection = styled.section<ColorProps>`
  width: 100%;
  background-color: ${(props) =>
    props.bgColor == "gray" ? "var(--clr-gray-200)" : "white"};
`;

export const SectionContainer = styled.div`
  width: 80vw;
  margin-inline: auto;
`;

export const Main = styled.main`
  margin-inline: auto;
  padding: var(--padding-section);
`;
