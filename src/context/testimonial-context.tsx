import { createContext, useState, useEffect, ReactNode } from "react";
import { Testimonial } from "../data/types";

export const TestimonialsContext = createContext<{
  testimonials: Testimonial[];
}>({
  testimonials: [],
});

export const TestimonialsProvider = ({ children }: { children: ReactNode }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("src/data/api.json");
      const data: Promise<{ testimonials: Testimonial[] }> = await res.json();
      setTestimonials((await data).testimonials);
    } catch (error) {
      console.log("Error fetching testimonials");
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const value = { testimonials };
  return (
    <TestimonialsContext.Provider value={value}>
      {children}
    </TestimonialsContext.Provider>
  );
};
