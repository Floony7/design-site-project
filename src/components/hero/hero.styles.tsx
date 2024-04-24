import styled from "styled-components";

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
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .hero__section-right {
    /* background: url();
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover; */
  }

  .hero__section-content {
    width: 50%;
    /* display: flex;
    flex-direction: column; */
  }

  .work-categories {
    color: var(--clr-magenta-200);
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;
