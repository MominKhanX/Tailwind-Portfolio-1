"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // Track horizontal mouse movement
  const y = useMotionValue(0); // Optional: track vertical mouse movement if needed

  // Horizontal rotation and translation
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]),
    springConfig
  );

  // Slight horizontal translation based on mouse position (no vertical movement)
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-10, 10]),  // Small amount of movement
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // Track mouse's horizontal position
    // Optional: add vertical tracking if needed
    y.set(event.nativeEvent.offsetY - event.target.offsetHeight / 2);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  rotate: rotate,  // Rotation
                  translateX: translateX,  // Slight horizontal movement
                  whiteSpace: "nowrap",
                }}
                className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-6 py-3"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-14 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-sm">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={250}
            width={250}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-60 w-60 border-4 group-hover:scale-105 hover:shadow-[7px_7px_0px_0px_rgba(255,255,255)] group-hover:z-30 border-[#000000] relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
