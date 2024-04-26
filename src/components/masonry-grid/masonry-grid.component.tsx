import { FullWidthSection } from "../../styles/page-layout";
import { officeImages } from "../../data/mock";
import { MasonryLayout } from "./masonry-grid.styles";

const path = "assets/images/office";

export const MasonryGrid = () => {
  return (
    <FullWidthSection bgColor="gray">
      <MasonryLayout>
        {officeImages.map((img) => (
          <img
            src={`${path}/${img.sm}`}
            srcSet={`${path}/${img.sm}, ${path}/${img.lg} 2x`}
            alt={img.sm}
          />
        ))}
      </MasonryLayout>
    </FullWidthSection>
  );
};
