import { Testimonial } from "./testimonials.component";
import { CardContainer } from "./testimonials.styles";

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const { name, comment, imgUrl, company } = testimonial;

  return (
    <CardContainer>
      <div className="card__content">
        <p>{comment}</p>
      </div>
      <img src={imgUrl} alt={name} />
      <div>{name}</div>
      <div>{company}</div>
    </CardContainer>
  );
};
