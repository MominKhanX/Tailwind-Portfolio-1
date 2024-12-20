"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Momin",
    designation: "Front-end Developer",
    image: "/Me4.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-3 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
