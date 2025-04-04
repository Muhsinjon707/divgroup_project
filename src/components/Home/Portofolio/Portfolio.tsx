"use client";

import React, { useState, useEffect } from "react";

// Axios
import axios from "axios";
import Image from "next/image";

// Interfaces
import PortfolioItem from "@/src/lib/portfolioInterface";

// Framer motion
import { motion } from "framer-motion";

const Portfolio = () => {
  const [data, setData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    async function getWebs() {
      try {
        const response = await axios.get("/api/test");
        console.log(response.data.data.websites);
        setData(response.data.data.websites);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getWebs();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full px-2 py-20 md:p-10 flex bg-gradient-to-br from-gray-800 via-gray-800 to-gray-800 justify-center"
    >
      <div className="container min-h-screen flex flex-col items-start justify-center gap-10 flex-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-7xl text-white"
        >
          Our Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-start justify-center xl:justify-between gap-5 lg:gap-10 w-full"
        >
          {data?.map((item) => {
            return (
              <motion.div
                variants={card}
                key={`Website-${item.id}`}
                className="group shrink-0 relative w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[350px] flex flex-col items-start justify-start bg-white rounded-2xl shadow overflow-hidden"
                style={{
                  backgroundImage: `url(${
                    item.images?.primary || "/no-available.jpg"
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/50"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h2 className="absolute top-3 left-3 text-4xl text-white font-bold">
                    {item.title}
                  </h2>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      opacity-0 transform translate-y-6 
                      group-hover:opacity-100 group-hover:translate-y-0
                      absolute bottom-4 w-[90%] px-6 py-3 
                      flex items-center justify-center gap-2
                      text-white text-lg font-medium 
                      bg-white/10 backdrop-blur-md border border-white/20
                      rounded-full shadow-lg transition-all duration-500 ease-out
                      hover:bg-white/20 hover:backdrop-blur-lg hover:border-white/30
                    "
                  >
                    Посмотреть проект →
                  </motion.button>

                  {item.logo && item.images?.primary && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Image
                        src={item.logo || "/no-available.jpg"}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="mt-2"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
