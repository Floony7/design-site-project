import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthSection } from "../../styles/page-layout";
import { CarouselContainer, TestimonialSection } from "./testimonials.styles";
import { TestimonialCard } from "./testimonial-card.component";
import { SectionHeader } from "../../styles/common";
import { useState } from "react";
import { Testimonial } from "../../data/types";
import { useViewportWidth } from "../../utils/use-viewport-width";
import { TestimonialFallbackCard } from "./testimonial-fallback.component";

const fetchTestimonials = async () => {
  try {
    const res = await fetch("/api.json");
    const data: Promise<{ testimonials: Testimonial[] }> = await res.json();
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.log("Error fetching testimonials");
  }
};

export const Testimonials = () => {
  const { data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
  //   console.log("Result", data);
  // Use currentSlide to determine which card is active
  const [currentSlide, setCurrentSlide] = useState(0);
  const width = useViewportWidth();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log("CURRENT", currentSlide);
  return (
    <FullWidthSection bgColor="white">
      <TestimonialSection>
        <SectionHeader>
          We unleash <br />
          <span className="gray">business potential</span>
        </SectionHeader>
        {width > 720 ? (
          <CarouselContainer>
            <div className="slider-container">
              <Slider
                {...settings}
                beforeChange={(_, nextSlide: number) =>
                  setCurrentSlide(nextSlide)
                }
              >
                {data?.testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Slider>
            </div>
          </CarouselContainer>
        ) : (
          <>
            {data?.testimonials.map((testimonial) => (
              <TestimonialFallbackCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </>
        )}
      </TestimonialSection>
    </FullWidthSection>
  );
};
