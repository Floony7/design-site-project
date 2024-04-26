import styled from "styled-components";
import { SectionContainer } from "../../styles/page-layout";

// type ActiveProps = { isActive: boolean };

export const TestimonialSection = styled(SectionContainer)`
  padding: 2rem 0;
`;

export const CarouselContainer = styled.div`
  width: 90%;
  height: 450px;
  margin: 3rem 0;
  border-radius: 10px;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  max-width: 320px;
  font-size: 1.2rem;
  padding: 1rem;
  color: var(--clr-slate-700);
  gap: 1.2rem;
  background-color: var(--clr-gray-500);

  @media only screen and (max-width: 1400px) {
    font-size: 1rem;
    width: 280px;
  }

  .card__client-details {
    text-align: center;
  }

  .card__content {
    font-style: italic;
    text-align: center;
  }

  .card__name {
    font-weight: 700;
  }

  img {
    width: 120px;
  }
`;

export const FallbackCardComponent = styled.section`
  width: 100%;

  img {
    float: right;
    width: 80px;
  }

  .card__content {
    font-style: italic;
  }

  .card__name {
    font-weight: 700;
  }
`;

// export const CardContainer = styled.article<ActiveProps>`
//   display: flex;
//   height: 100%;
//   flex-direction: column;
//   color: ${(props) => (props.isActive ? "white" : "var(--clr-slate-900)")};
//   background-color: ${(props) =>
//     props.isActive ? "var(--clr-slate-900)" : "var(--clr-gray-700)"};

//   .card__content {
//     font-style: italic;
//     text-align: center;
//   }
// `;
