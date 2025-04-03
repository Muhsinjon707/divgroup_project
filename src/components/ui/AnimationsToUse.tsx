"use client";
import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Fade-in animation
export const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { delay } });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

// Slide-in animation
export const SlideIn = ({ children, direction = "left", delay = 3 }: { children: ReactNode; direction?: "left" | "right" | "top" | "bottom"; delay?: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1, transition: { delay } });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

// Staggered animation
export const StaggeredContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
};



export const StaggeredItem = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale and rotate animation
export const ScaleRotate = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, rotate: 0, transition: { delay } });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, rotate: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect
export const Parallax = ({ children, speed = 1 }: { children: ReactNode; speed?: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100 * speed, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

