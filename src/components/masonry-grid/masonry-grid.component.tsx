import { FullWidthSection } from "../../styles/page-layout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { officeImages } from "../../data/mock";
import { MasonryLayout } from "./masonry-grid.styles";

const path = "assets/images/office/";
export const MasonryGrid = () => {
  return (
    <FullWidthSection bgColor="gray">
      <MasonryLayout>
        <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 900: 3 }}>
          <Masonry>
            {officeImages.map((img) => (
              <img
                key={img.sm}
                src={`${path}/${img.sm}`}
                srcSet={`${path}/${img.sm}, ${path}/${img.lg} 2x`}
                alt={img.sm}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </MasonryLayout>
    </FullWidthSection>
  );
};
