"use client";

import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { FlipWordsDemo } from "./FlipWordsDemo";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center w-full px-6">
      {/* Feedback text on the left */}
      <div className="w-1/2 ml-32 text-left space-y-4">
        <FlipWordsDemo/>
      </div>

      {/* Card Stack on the right */}
      <div className="w-1/2 flex justify-end">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Highlight component remains the same
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "John Doe",
    designation: "Food Critic",
    content: (
      <p>
        The <Highlight>Butter Paneer Masala</Highlight> was simply exceptional! Smooth, rich, and layered with flavor—an absolute delight for my taste buds. A dish worth savoring.
      </p>
    ),
  },
  {
    id: 1,
    name: "Sophia Patel",
    designation: "Vegetarian Foodie",
    content: (
      <p>
        I can’t stop raving about the <Highlight>Stuffed Mushrooms</Highlight>. The balance of herbs and spices inside was just divine. Melted cheese took it to the next level!
      </p>
    ),
  },
  {
    id: 2,
    name: "Michael Johnson",
    designation: "Travel Enthusiast",
    content: (
      <p>
        I’ve tasted seafood across continents, and the <Highlight>Grilled Fish Platter</Highlight> here holds its own. Fresh, tender, and beautifully charred—an unforgettable meal!
      </p>
    ),
  },
  {
    id: 3,
    name: "Emily Chen",
    designation: "Food Blogger",
    content: (
      <p>
        As someone with a sweet tooth, I must say the <Highlight>Chocolate Lava Cake</Highlight> was out of this world. The molten center oozed perfection. 10/10!
      </p>
    ),
  },
  {
    id: 4,
    name: "Daniel Thompson",
    designation: "Fitness Coach",
    content: (
      <p>
        I opted for the <Highlight>Quinoa Salad</Highlight> and was not disappointed. Light, crunchy, and incredibly fresh. Perfect for a clean, nutritious lunch.
      </p>
    ),
  },
  {
    id: 5,
    name: "Ava Robinson",
    designation: "Casual Diner",
    content: (
      <p>
        Wow! The <Highlight>Chicken Biryani</Highlight> was bursting with flavor and aroma. Every bite was a treat. This is easily the best biryani I’ve had in months!
      </p>
    ),
  },
  {
    id: 6,
    name: "Liam Brown",
    designation: "Food Enthusiast",
    content: (
      <p>
        The <Highlight>Paneer Tikka</Highlight> was perfectly charred and so flavorful. The smoky undertone combined with the tangy marinade made it impossible to resist.
      </p>
    ),
  },
  {
    id: 7,
    name: "Olivia Wilson",
    designation: "Chef & Baker",
    content: (
      <p>
        Tried the <Highlight>Garlic Naan</Highlight> and I’m still dreaming about it. Soft, buttery, and just the right hint of garlic. A perfect companion for any curry.
      </p>
    ),
  },
  {
    id: 8,
    name: "Rajesh Kumar",
    designation: "Spice Lover",
    content: (
      <p>
        If you’re a fan of bold flavors, you must try the <Highlight>Spicy Lamb Curry</Highlight>. Packed with heat and depth, it’s not for the faint of heart—just the way I like it!
      </p>
    ),
  },
  {
    id: 9,
    name: "Priya Sharma",
    designation: "Family Diner",
    content: (
      <p>
        Our family loved the <Highlight>Family Feast Platter</Highlight>. There was something for everyone—perfectly portioned and beautifully presented. Highly recommended!
      </p>
    ),
  },
];