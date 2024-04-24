import { capabilityArray } from "../../data/mock";
import { CtaLink, Lead, SectionHeader } from "../../styles/common";
import { FullWidthSection, SectionContainer } from "../../styles/page-layout";
import { CapabilityGrid, CapabilityStyles } from "./capability.styles";

export const Capabilty = () => {
  return (
    <FullWidthSection bgColor="gray">
      <SectionContainer>
        <CapabilityStyles>
          <div className="capability__section-left">
            <article className="capability__section-content">
              <SectionHeader>
                What are <br />
                <span className="gray">we capable of</span>
              </SectionHeader>
              <Lead>
                By focusing on design as an enabler and putting a huge emphasis
                on our clients as co-producers, we create innovative,
                sustainable marketing that enhances brand experience and user
                engagement.
              </Lead>
              <p>
                <CtaLink href="#">Our process</CtaLink>
              </p>
            </article>
          </div>
          <div className="capability__section-right">
            <CapabilityGrid>
              <section>
                <div className="capability__section-grid--list">
                  <h4 className="capability-grid__header">Brand</h4>
                  {capabilityArray
                    .filter((c) => c.area === "brand")
                    .map((c) => (
                      <div>{c.skill}</div>
                    ))}
                </div>
                <div className="capability__section-grid--list">
                  <h4 className="capability-grid__header">Development</h4>
                  {capabilityArray
                    .filter((c) => c.area === "development")
                    .map((c) => (
                      <div>{c.skill}</div>
                    ))}
                </div>
              </section>
              <section>
                <div>
                  <h4 className="capability-grid__header">Marketing</h4>
                  {capabilityArray
                    .filter((c) => c.area === "marketing")
                    .map((c) => (
                      <div>{c.skill}</div>
                    ))}
                </div>
              </section>
            </CapabilityGrid>
          </div>
        </CapabilityStyles>
      </SectionContainer>
    </FullWidthSection>
  );
};
