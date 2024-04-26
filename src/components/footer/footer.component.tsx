import { CtaLink, SectionHeader } from "../../styles/common";
import { navLinks, services } from "../../data/mock";
import {
  Colophon,
  FooterContainer,
  FooterLinks,
  FooterSection,
} from "./footer.styles";
import { capitalise } from "../../utils/functions";
import { SectionContainer } from "../../styles/page-layout";
import { SocialLinks } from "./social-links.component";

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
              <ul>
                {services.map((service) => (
                  <li key={service}>
                    <a href="#">{capitalise(service)}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="capitalised__header">Questions?</h4>
              <div>
                <h4>Call Us</h4>
                <span>0121 345 678</span>
              </div>

              <div>
                <h4>Email Us</h4>
                <span>info@digitalspaniel.co.uk</span>
              </div>
            </div>
          </FooterLinks>
        </div>
      </FooterSection>
      <SectionContainer>
        <Colophon>
          <div>
            Copyright © Digital Spaniel {new Date().getFullYear()}. All rights
            reserved.
          </div>
          <SocialLinks />
        </Colophon>
      </SectionContainer>
    </FooterContainer>
  );
};
