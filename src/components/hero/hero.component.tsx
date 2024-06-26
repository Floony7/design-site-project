import { CtaLink, Lead, SectionHeader } from "../../styles/common";
import { FullWidthSection } from "../../styles/page-layout";
import spaniel from "../../assets/images/spaniel_gradient.png";
import { HeroContainer } from "./hero.styles";
import { useViewportWidth } from "../../utils/use-viewport-width";

export const Hero = () => {
  const width = useViewportWidth();

  return (
    <FullWidthSection>
      <div>
        <HeroContainer>
          <div className="hero__section hero__section-left">
            <article className="hero__section-content">
              <div>
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
              </div>
            </article>
          </div>
          {width > 760 ? (
            <div className="hero__section hero__section-right">
              <img src={spaniel} alt="Spaniel Design Agency logo" />
            </div>
          ) : null}
        </HeroContainer>
      </div>
      {/* </SectionContainer> */}
    </FullWidthSection>
  );
};
