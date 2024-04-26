import { Testimonial } from "../../data/types";
import { FallbackCardComponent } from "./testimonials.styles";

export const TestimonialFallbackCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
} & React.HTMLAttributes<HTMLElement>) => {
  const { name, comment, imgUrl, company } = testimonial;

  return (
    <FallbackCardComponent>
      <img src={imgUrl} alt={name} />
      <div className="card__content">
        <p>{comment}</p>
      </div>

      <div>
        <div className="card__name">{name}</div>
        <div className="card__company">{company}</div>
      </div>
    </FallbackCardComponent>
  );
};
