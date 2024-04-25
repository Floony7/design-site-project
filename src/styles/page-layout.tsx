import styled from "styled-components";

type BgColors = "white" | "gray";

type ColorProps = { bgColor?: BgColors };

export const FullWidthSection = styled.section<ColorProps>`
  width: 100%;
  background-color: ${(props) =>
    props.bgColor === "gray" ? "var(--clr-gray-200)" : "white"};
`;

FullWidthSection.displayName = "FullWidthSection";

export const SectionContainer = styled.div`
  width: 70vw;
  margin-inline: auto;
`;

SectionContainer.displayName = "SectionContainer";

export const Main = styled.main`
  margin-inline: auto;
  padding: var(--padding-section);
`;
