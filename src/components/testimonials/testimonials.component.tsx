import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthSection, SectionContainer } from "../../styles/page-layout";
import { CarouselContainer } from "./testimonials.styles";
import { TestimonialCard } from "./testimonial-card.component";
import { SectionHeader } from "../../styles/common";
import { useState } from "react";
import { Testimonial } from "../../data/types";

const fetchTestimonials = async () => {
  try {
    const res = await fetch("src/data/api.json");
    const data: Promise<{ testimonials: Testimonial[] }> = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching testimonials");
  }
};

export const Testimonials = () => {
  const { isError, data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
  //   console.log("Result", data);
  // Use currentSlide to determine which card is active
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
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
      <SectionContainer>
        <SectionHeader>
          We unleash <br />
          <span className="gray">business potential</span>
        </SectionHeader>
        <CarouselContainer>
          {isError ? "Could not fetch testimonials" : null}
          <div className="slider-container">
            <Slider
              {...settings}
              beforeChange={(currentSlide: number, nextSlide: number) =>
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
      </SectionContainer>
    </FullWidthSection>
  );
};
