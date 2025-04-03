"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import data from "../../assets/data.png";
import uiux from "../../assets/design.png";
import prototype from "../../assets/prototyping.png";
import development from "../../assets/programming.png";
import testing from "../../assets/testing.png";

const CustomStickyScroll = () => {
  const cards = [
    {
      id: 1,
      title: "Сбор требований",
      description:
        "Детальное изучение требований, ресурсов и исходной информации по проекту и формирование технического задания на разработку ПО.",
      image: data,
    },
    {
      id: 2,
      title: "Дизайн UI/UX",
      description:
        "Создание интуитивно понятного и привлекательного интерфейса для пользователей.",
      image: uiux,
    },
    {
      id: 3,
      title: "Прототипирование",
      description:
        "Разработка прототипов для тестирования и утверждения концепции.",
      image: prototype,
    },
    {
      id: 4,
      title: "Разработка",
      description: "Программирование и создание функционального продукта.",
      image: development,
    },
    {
      id: 5,
      title: "Тестирование",
      description: "Проверка качества и устранение ошибок перед запуском.",
      image: testing,
    },
  ];

  return (
    <motion.div
      className="pt-28 flex flex-col gap-5 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <div className="bg-[#18212F] px-20 py-16 rounded-xl h-[280px] flex justify-center items-center">
        <h2 className="text-8xl text-white text-center">Этапы разработки</h2>
      </div>
      <div className="flex flex-col gap-5">
        {cards.map((card, index) => {
          const cardRef = useRef(null);
          const isInView = useInView(cardRef, { once: true });

          return (
            <motion.div
              key={card.id}
              className="bg-[#18212F] px-20 py-16 rounded-xl h-[280px] flex justify-between items-center"
              ref={cardRef}
              initial={{ y: 50, opacity: 0, x: -30, scale: 0.95 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1, x: 0, scale: 1 }
                  : { y: 50, opacity: 0, x: -30, scale: 0.95 }
              }
              transition={{
                duration: 1.0,
                ease: "easeOut",
                delay: index * 0.3,
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            >
              <div className="flex items-center gap-32">
                <motion.div
                  className="w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ delay: index * 0.3 + 0.2, duration: 0.8 }}
                >
                  <span className="text-4xl font-bold text-black">
                    {index + 1}
                  </span>
                </motion.div>
                <div className="flex flex-col gap-3 w-2/4">
                  <motion.h2
                    className="text-6xl text-white"
                    initial={{ x: -30, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }
                    }
                    transition={{ delay: index * 0.3 + 0.3, duration: 0.9 }}
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p
                    className="text-white"
                    initial={{ x: -30, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }
                    }
                    transition={{ delay: index * 0.3 + 0.4, duration: 0.9 }}
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.div
                className="img"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ delay: index * 0.3 + 0.5, duration: 1.0 }}
              >
                <Image
                  className="object-cover"
                  width={220}
                  height={220}
                  alt={card.title}
                  src={card.image}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CustomStickyScroll;
