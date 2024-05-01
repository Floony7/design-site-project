# Digital Spaniel Design Agency - Rationale and Dev Choices

Read on for background and decisions made in handling some of the requirements of the brief and what I'd do next / if had more time.

## Project structure and styles
For this project, I wanted to use a mix of Styled Components and BEM where necessary. I created a `globalStyles` to store css color variables and other defaults.
With Styled Components, I scope the styles based on components that use them and source variables from `globalStyles`.

I also use a couple of block and section Styled Components that can easily be imported in and made available where needed. These set widths and other styles such as margins and padding that are replicated throughout the page.

## Responsive design
Responsive design wasn't bakd in to the design, so I developed the site with desktop / larger viewport widths in mind. I used both media queries (max-width) and a custom hook, `useViewportWidth` for responsiveness.
The hook came in handy for creating the hamburger menu and in rendering the responsive fallback for the testimonial carousel.
Essentially, I use this hook to get the latest viewport width then conditionally render based on that width (in the above cases a mobile nav and a fallback for the carousel).

## Data fetching
The data for the Testimonials section is sourced from a `api.json` file hosted locally. For this, I used React Query as this is one of the best ways in React for fetching data, caching and tracking loading states. As the brief also mentioned showing the use of a state manager, I coded the data fetching and storage for testimonials in a `TestimonialsContext`. Using Context feels right for a simple application like this. In a more complex job I would reach for React Toolkit, as it is simple and effective to implement out of the box.

## Carousel
The carousel has been brought in via a package and isn't quite what the design specified. It also started to degrade in quality at lower viewport widths, so I render it a fallback for these devices.
If I had more time I would be able to develop a custom carousel, or utilise an existing component for this. Given the time and the fact the testimonials section is so important to this test, I have included a working carousel.

## Additional time - what I would do
Aside from any tasks I have stated above, I would also:
- pay more attention to error handling with respect to data fetching
- perhaps use Suspense for fallback rendering and lazy loading
- use Flexbox in places where I've used Grid so that responsiveness is baked in (less need for media queries)
- design better customised components for the Carousel, Masonry and perhaps the Mobile Nav
