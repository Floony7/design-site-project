import styled from "styled-components";

export const CapabilityStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
  padding-top: 3rem;

  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  .capability__section-left {
    background: inherit;
    display: flex;
    height: 100%;
  }

  .capability__section-content {
    width: 65%;

    @media only screen and (max-width: 760px) {
      width: 100%;
    }
  }
`;

export const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 60%;
  margin: 3rem 0 3rem 3rem;

  @media only screen and (max-width: 760px) {
    width: 100%;
    justify-items: center;
    margin-left: 0;
  }

  .capability__section-grid--list:not(:first-child) {
    margin-top: 1rem;
  }

  .capability-grid__header {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--clr-slate-800);
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
