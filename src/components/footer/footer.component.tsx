import { CtaLink, Lead, SectionHeader } from "../../styles/common";
import { navLinks } from "../../data/mock";
import { FooterContainer, FooterLinks, FooterSection } from "./footer.styles";

export const Footer = () => {
  return (
    <FooterContainer bgColor="gray">
      <FooterSection>
        <div className="footer__col footer__col-left">
          <SectionHeader>
            We're a brand's <br />
            <span className="gray">best friend</span>
          </SectionHeader>
          <p className="footer__cta">
            <CtaLink href="#">Let's talk</CtaLink>
          </p>
        </div>
        <div className="footer__col footer__col-right">
          <FooterLinks>
            <div>
              <h4 className="capitalised__header">Explore</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href="#">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="capitalised__header">Services</h4>
            </div>
            <div>
              <h4 className="capitalised__header">Questions?</h4>
            </div>
          </FooterLinks>
        </div>
      </FooterSection>
    </FooterContainer>
  );
};
