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

  return (
    <div className="w-full p-2 md:p-10 flex bg-gradient-to-br from-gray-800 via-gray-800 to-gray-800 justify-center">
      <div className="container min-h-screen flex items-start justify-center gap-10 flex-wrap">
        <div className="flex flex-wrap items-start justify-center xl:justify-between gap-5 lg:gap-10 w-full">
          {data?.map((item) => {
            return (
              <div
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

                  <button
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
                  </button>

                  {item.logo && item.images?.primary && (
                    <Image
                      src={item.logo || "/no-available.jpg"}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="mt-2"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
