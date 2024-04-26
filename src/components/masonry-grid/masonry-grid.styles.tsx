import styled from "styled-components";

export const MasonryLayout = styled.div`
  columns: 20rem;
  gap: clamp(1rem, 5vmin, 2rem);
  max-width: 70%;
  margin: 0 auto;

  img {
    max-width: 100%;
  }

  @media only screen and (max-width: 1360px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 40%;
    }
  }
`;
