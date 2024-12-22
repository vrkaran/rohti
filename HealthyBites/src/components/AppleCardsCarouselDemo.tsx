/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const images = [
    require('@/assets/Cuisine1.png'),
    require('@/assets/Cuisine2.png'),
    require('@/assets/Cuisine3.png'),
    require('@/assets/Cuisine4.png'),
    require('@/assets/Cuisine5.png'),
    require('@/assets/Cuisine6.png'),
  ];

  const data = [
    {
      category: "North Indian Cuisine",
      title: "Explore the rich flavors of North India.",
      src: images[0],
      content: <p>Enjoy dishes like Butter Chicken, Dal Makhani, and Naan, known for their richness and bold flavors.</p>,
    },
    {
      category: "South Indian Cuisine",
      title: "Savor the tangy and spicy tastes of South India.",
      src: images[1],
      content: <p>Feast on Dosa, Idli, and Sambar with a touch of coconut in every bite.</p>,
    },
    {
      category: "Chinese Cuisine",
      title: "Experience the bold flavors of Indo-Chinese fusion.",
      src: images[2],
      content: <p>Relish dishes like Hakka Noodles, Manchurian, and Chilli Chicken.</p>,
    },
    {
      category: "Mughlai Cuisine",
      title: "Indulge in royal flavors and rich aromas.",
      src: images[3],
      content: <p>Try dishes like Biryani, Kebabs, and Korma, inspired by royal kitchens.</p>,
    },
    {
      category: "Italian Cuisine",
      title: "Delight in cheesy and creamy Italian classics.",
      src: images[4],
      content: <p>Enjoy Pizza, Pasta, and Lasagna with authentic herbs and flavors.</p>,
    },
    {
      category: "Korean Cuisine",
      title: "Delve into the flavors of Korean BBQ and more.",
      src: images[5],
      content: <p>Enjoy Korean BBQ, Bibimbap, Kimchi, and other savory delights.</p>,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your Taste.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}