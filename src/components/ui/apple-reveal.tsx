"use client";

import React from "react";
import { motion } from "framer-motion";

interface AppleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const AppleReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AppleRevealProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 36, x: 0 };
      case "down":
        return { y: -36, x: 0 };
      case "left":
        return { x: 36, y: 0 };
      case "right":
        return { x: -36, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const pos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...pos,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false, // Triggers BOTH in and out animation on every scroll
        amount: 0.12,
        margin: "-20px 0px -20px 0px",
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AppleReveal;
