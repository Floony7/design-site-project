import styled from "styled-components";
// import image from "../../assets/images/spaniel_gradient.png"

export const HeroContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 760px) {
    grid-template-columns: auto;
  }

  .hero__section {
    min-height: 30vh;
  }

  .hero__section-left {
    background: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 760px) {
      margin: 2rem 0;
      justify-content: center;
      width: 100%;
    }
  }

  .hero__section-right {
    img {
      height: 100%;
      width: 100%;
    }
  }

  .hero__section-content {
    margin-top: 7rem;
    width: 70%;

    div {
      width: 70%;
    }

    @media only screen and (max-width: 760px) {
      width: 90vw;

      div {
        width: 100%;
      }
    }
  }

  .work-categories {
    color: var(--clr-magenta-200);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    /* font-size: clamp(1rem, 2.5vw, 2rem); */
  }
`;
