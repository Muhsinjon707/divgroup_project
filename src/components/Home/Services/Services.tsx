"use client";

import React from "react";
import { FaRocket, FaUsers } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import "./style.css";
import Image from "next/image";
import web_design from "@/src/assets/web-design.svg";
import web_development from "@/src/assets/web-development.svg";
import application from "@/src/assets/application.svg";
import Link from "next/link";

import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <section className="bg-gray-800 main-services text-center py-[6rem]">
        <div className="container mx-auto">
          <h2 className="section-title max-md:mb-[5rem] text-white">
            Bizning xizmatlar
          </h2>
          <ul id="#services" className="mt-20">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group rounded-[2.3rem] bg-[#18212f] px-[2.2rem] flex items-center flex-col pb-[2rem]"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mt-[-50px] rounded-full bg-site-bg-color p-[1.2rem] mb-[2.4rem]"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-full w-[100px] h-[100px] flex items-center justify-center bg-white text-white
                    group-hover:bg-primary group-hover:text-white transition duration-300 ease-linear
                  "
                >
                  <Image
                    src={web_design}
                    alt="web design"
                    width="50"
                    height="50"
                  />
                </motion.div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl max-md:text-4xl mb-[1.2rem] text-white"
              >
                SMM
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-text-color text-[1.6rem] mb-[1.8rem]"
              >
                Auditoriyangizni kengaytiring, brend xabardorligini oshiring,
                faollikni va savdoni oshiring.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  className="
                  rounded-full p-[1.8rem] inline-block bg-white text-black group-hover:text-white
                 group-hover:bg-primary transition duration-300 ease-in"
                  href="/"
                >
                  <FaArrowRightLong />
                </Link>
              </motion.div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group rounded-[2.3rem] bg-[#18212f] px-[2.2rem] flex items-center flex-col pb-[2rem]"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mt-[-50px] rounded-full bg-site-bg-color p-[1.2rem] mb-[2.4rem]"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-full w-[100px] h-[100px] flex items-center justify-center bg-white text-gray-text-color
                    group-hover:bg-primary transition duration-300 ease-linear
                  "
                >
                  <Image
                    src={web_development}
                    alt="web design"
                    width="50"
                    height="50"
                  />
                </motion.div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl max-md:text-4xl mb-[1.2rem] text-white"
              >
                Web sayt
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-text-color text-[1.6rem] mb-[1.8rem]"
              >
                Sizning biznesingizning Internetdagi yuzi. <br /> Tovar va
                xizmatlarni sotish platformasi. <br /> Umid va Ishonchni
                shakllantirish vositasi
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  className="
                  rounded-full p-[1.8rem] inline-block bg-white text-black group-hover:text-white
                 group-hover:bg-primary transition duration-300 ease-in"
                  href="/"
                >
                  <FaArrowRightLong />
                </Link>
              </motion.div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group rounded-[2.3rem] bg-[#18212f] px-[2.2rem] flex items-center flex-col pb-[2rem]"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mt-[-50px] rounded-full bg-site-bg-color p-[1.2rem] mb-[2.4rem]"
              >
                <motion.div
                  whileHover={{ scale: 1.0 }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-full w-[100px] h-[100px] flex items-center justify-center 
                   bg-white group-hover:bg-primary transition duration-300 ease-linear
                  "
                >
                  <Image
                    src={application}
                    alt="web design"
                    width="50"
                    height="50"
                  />
                </motion.div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl max-md:text-4xl mb-[1.2rem] text-white"
              >
                CRM va ERP
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-text-color text-[1.6rem] mb-[1.8rem]"
              >
                Vaqt va resurslarni tejang <br /> Ish samaradorligini oshirish
                va imkoniyatlarni kengaytiring
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  className="
                  rounded-full p-[1.8rem] inline-block bg-white text-black group-hover:text-white
                 group-hover:bg-primary transition duration-300 ease-in"
                  href="/"
                >
                  <FaArrowRightLong />
                </Link>
              </motion.div>
            </motion.li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Services;
