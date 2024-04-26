import { CtaLink } from "../../styles/common";
import { FullWidthSection } from "../../styles/page-layout";
import { AboutSection } from "./about.styles";
import { MasonryGrid } from "../masonry-grid/masonry-grid.component";

export const About = () => {
  return (
    <FullWidthSection bgColor="gray">
      <AboutSection>
        <MasonryGrid />
        <section className="about__cta-links">
          <CtaLink href="#">About</CtaLink>
          <CtaLink href="#">Careers</CtaLink>
        </section>
      </AboutSection>
    </FullWidthSection>
  );
};
