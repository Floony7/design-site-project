import styled from "styled-components";
// import image from "../../assets/images/spaniel_gradient.png"

export const HeroContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .hero__section {
    min-height: 30vh;
  }

  .hero__section-left {
    background: inherit;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .hero__section-right {
    /* background: url("src/assets/images/spaniel_gradient.png") no-repeat center
      center fixed;
    background-size: contain; */
    img {
      height: 100%;
      max-width: 100%;
    }
  }

  .hero__section-content {
    margin-top: 7rem;
    width: 70%;
  }

  .work-categories {
    color: var(--clr-magenta-200);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    /* font-size: clamp(1rem, 2.5vw, 2rem); */
  }
`;
