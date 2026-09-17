"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="print-hide fixed top-0 right-0 left-0 z-[70] h-[2px] origin-left bg-gold lg:left-[88px]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
