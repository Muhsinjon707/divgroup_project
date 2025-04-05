"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Meteors } from "../ui/Meteors";
import Image from "next/image";
import web from "../../assets/software-development.png";
import mobile from "../../assets/mobile-development.png";
import design from "../../assets/illustration.png";
import iphone from "../../assets/apple_270781.png";

const services = [
  {
    id: 1,
    title: "SMM",
    description: [
      "Auditoriyangizni kengaytiring.",
      "Brend xabardorligini oshiring.",
      "Faollikni va savdoni oshiring.",
    ],
    icon: mobile,
  },
  {
    id: 2,
    title: "Web sayt",
    description: [
      "Sizning biznesingizning Internetdagi yuzi.",
      "Tovar va xizmatlarni sotish platformasi.",
      "Umid va Ishonchni shakllantirish vositasi.",
    ],
    icon: web,
  },
  {
    id: 3,
    title: "CRM va ERP",
    description: [
      "Vaqt va resurslarni tejang.",
      "Ish samaradorligini oshirish.",
      "Imkoniyatlarni kengaytiring.",
    ],
    icon: design,
  },
];

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveCard((prev) => (index > prev ? index : prev));
          }
        });
      },
      {
        rootMargin: "0px 0px -30% 0px",
      }
    );

    const elements = sectionRef.current?.querySelectorAll(".card");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] bg-gray-800 flex items-center justify-center"
    >
      <div className="sticky h-screen flex justify-center items-center">
        <div className="container_2 text-left">
          <div className="flex items-center gap-20 mb-9">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 20 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-bold text-white mb-4"
            >
              Bizning xizmatlar
            </motion.h2>
            {/* <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 20 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl text-gray-400"
            >
              Разработка мобильных приложений и веб-проектов <br /> для бизнеса
              и стартапов
            </motion.p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                data-index={index + 1}
                className={`card px-7 py-16 rounded-xl bg-[#18212F] shadow-lg relative overflow-hidden ${
                  activeCard >= index + 1 ? "visible" : "invisible"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: activeCard >= index + 1 ? 1 : 0,
                  y: activeCard >= index + 1 ? 0 : 50,
                }}
                transition={{ duration: 1.1, delay: index * 0.3 }}
              >
                <Image
                  width={64}
                  height={64}
                  src={service.icon}
                  alt={service.title}
                  className="mb-10"
                />

                <h3 className="text-4xl font-semibold text-white mb-10">
                  {service.title}
                </h3>
                {/* <p className="text-gray-400 mb-4">{service.subheading}</p> */}

                <ul className="text-gray-400 mb-6 space-y-2">
                  {service.description.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">•</span> {point}
                    </li>
                  ))}
                </ul>

                <Meteors number={22} />

                {/* <div className="flex justify-start space-x-14">
                  {service.buttons.map((button) => (
                    <motion.button
                      key={button.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-2  border-2 border-white text-white rounded-full transition-all flex items-center mt-10"
                    >
                      <span className="mr-2">{button.icon}</span>
                      {button.label}
                    </motion.button>
                  ))}
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
