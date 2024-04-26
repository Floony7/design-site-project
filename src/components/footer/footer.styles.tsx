import styled from "styled-components";
import { FullWidthSection, SectionContainer } from "../../styles/page-layout";

export const FooterContainer = styled(FullWidthSection)`
  padding: 1rem 0;
`;

export const FooterSection = styled(SectionContainer)`
  display: flex;
  padding-bottom: 4rem;
  flex-wrap: wrap;

  .footer__col {
    width: 100%;
  }

  .footer__col-left {
    flex-grow: 1;
  }

  .footer__col-right {
    flex-grow: 3;
    margin-top: 3rem;
  }

  .footer__cta {
    margin-top: 5rem;
  }
`;

export const FooterLinks = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  color: var(--clr-slate-700);

  .footer__link-col {
    flex: auto;
  }

  ul {
    list-style: none;
    padding-left: 0;
    font-weight: 600;
  }

  a {
    color: var(--clr-slate-700);
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--clr-magenta-200);
    }
  }

  h4 {
    margin-bottom: 0;
  }
`;

export const Colophon = styled.section`
  display: flex;
  justify-content: space-between;
  color: var(--clr-slate-700);
  font-size: 0.8rem;

  .colophon__social-links {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
  }
`;
