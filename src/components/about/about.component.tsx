import { CtaLink } from "../../styles/common";
import { FullWidthSection } from "../../styles/page-layout";
import { AboutSection } from "./about.styles";

export const About = () => {
  return (
    <FullWidthSection bgColor="gray">
      <AboutSection>
        <h1>Test</h1>
        <section className="about__cta-links">
          <CtaLink href="#">About</CtaLink>
          <CtaLink href="#">Careers</CtaLink>
        </section>
      </AboutSection>
    </FullWidthSection>
  );
};
