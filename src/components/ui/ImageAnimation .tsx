import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hero_title from "../../assets/logo-hero-little.svg";
import hero from "../../assets/logo-hero.svg";

const ImageAnimation = () => {
  return (
    <div className="w-[500px] pt-32">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.8 }}
        className="absolute"
      >
        <Image
          src={hero_title}
          alt="Animated logo title"
          width={400}
          height={400}
          className=""
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute"
      >
        <Image
          src={hero}
          className=""
          alt="Animated hero logo"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default ImageAnimation;
