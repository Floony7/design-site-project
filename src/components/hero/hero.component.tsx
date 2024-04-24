import { CtaLink, Lead, SectionHeader } from "../../styles/common";
import { FullWidthSection, SectionContainer } from "../../styles/page-layout";
import spaniel from "../../assets/images/spaniel_gradient.png";
import { HeroContainer } from "./hero.styles";

export const Hero = () => {
  return (
    <FullWidthSection>
      <SectionContainer>
        <div>
          <HeroContainer>
            <div className="hero__section hero__section-left">
              <article className="hero__section-content">
                <div className="work-categories">
                  Brand, Dev, Ecom, Marketing
                </div>
                <SectionHeader>
                  We unleash <br />
                  <span className="gray">business potential</span>
                </SectionHeader>
                <Lead>
                  We create brand experiences which are memorable and distinct.
                  Our experienced team create and develop brands with
                  personality and resonance.
                </Lead>
                <p>
                  <CtaLink href="#">Let's talk</CtaLink>
                </p>
              </article>
            </div>
            <div className="hero__section hero__section-right">
              <img src={spaniel} alt="Spaniel Design Agency logo" />
            </div>
          </HeroContainer>
        </div>
      </SectionContainer>
    </FullWidthSection>
  );
};
