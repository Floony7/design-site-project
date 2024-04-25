import styled from "styled-components";

// type ActiveProps = { isActive: boolean };

export const CarouselContainer = styled.div`
  width: 80%;
  height: 450px;
  margin: 3rem 0;
  border-radius: 10px;
`;

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  max-width: 350px;
  padding: 1rem;
  /* margin: 0 10px; */
  color: black;
  background-color: var(--clr-gray-500);

  .card__content {
    font-style: italic;
    text-align: center;
  }

  img {
    width: 50%;
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
