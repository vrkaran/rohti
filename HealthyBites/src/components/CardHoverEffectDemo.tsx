import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Explore Menu",
    description: "Our Menu. Explore our range of food, delivered in 30 minutes!",
    link: "#",
  },
  {
    title: "Store Locator",
    description: "Nearby Store. Find a restaurant near you.",
    link: "#",
  },
  {
    title: "Birthday Party",
    description: "Celebrate the joy of birthday with Fresh & Hot food.",
    link: "#",
  },
  {
    title: "Catering",
    description: "Live Kitchen for weddings / corporate events.",
    link: "#",
  },
];