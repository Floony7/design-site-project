import { Testimonial } from "../../data/types";
import { CardContainer } from "./testimonials.styles";

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
} & React.HTMLAttributes<HTMLElement>) => {
  const { name, comment, imgUrl, company } = testimonial;

  return (
    <CardContainer>
      <div className="card__content">
        <p>{comment}</p>
      </div>
      <img src={imgUrl} alt={name} />
      <div>
        <div className="card__name">{name}</div>
        <div className="card__company">{company}</div>
      </div>
    </CardContainer>
  );
};
