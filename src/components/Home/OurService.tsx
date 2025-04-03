"use client";
import React from "react";
import CustomStickyScroll from "../ui/CustomStickyScroll";
import Image from "next/image";
import data from "../../assets/data.png";
import uiux from "../../assets/design.png";
import prototype from "../../assets/prototyping.png";
import development from "../../assets/programming.png";
import testing from "../../assets/testing.png";
import deployment from "../../assets/business.png";
import support from "../../assets/technical-support.png";

const content = [
  {
    title: "Сбор требований",
    description:
      "Детальное изучение требований, ресурсов и исходной информации по проекту и формирование технического задания на разработку ПО.",
    content: (
      <div className="">
        <Image
          src={data}
          width={350}
          height={350}
          className=""
          alt="Mobile Development"
        />
      </div>
    ),
  },
  {
    title: "UI/UX Дизайн",
    description:
      "Разработка современного функционального и удобного дизайна с применением новейших инструментов.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src={uiux} width={350} height={350} className="" alt="ui ux" />
      </div>
    ),
  },
  {
    title: "Прототип (MVP)",
    description:
      "В результате проектирования формируется прототип и отправляется для разработки продукта",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={prototype}
          width={350}
          height={350}
          className=""
          alt="prototype"
        />
      </div>
    ),
  },
  {
    title: "Разработка",
    description:
      "Процесс разработки системы интеллектуального учета, мобильного приложения или веб-сайта в режиме максимальной прозрачности.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={development}
          width={350}
          height={350}
          className=""
          alt="Development"
        />
      </div>
    ),
  },
  {
    title: "Тестирование",
    description:
      "В ходе тестовых запусков обеспечиваем полную отказоустойчивость продукта.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={testing}
          width={350}
          height={350}
          className=""
          alt="Web Development"
        />
      </div>
    ),
  },
  {
    title: "Развертывание",
    description: "Запуск готового продукта в работу (ИСУ, сайта, приложения).",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={deployment}
          width={350}
          height={350}
          className=""
          alt="Deployment"
        />
      </div>
    ),
  },
  {
    title: "Поддержка и обслуживание",
    description:
      "Обеспечиваем полную техническую поддержку и сопровождение по всем вопросам, возникающим после развертывания.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={support}
          width={350}
          height={350}
          className=""
          alt="support"
        />
      </div>
    ),
  },
];

export function OurServices() {
  return (
    <div className="container_2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <CustomStickyScroll />
    </div>
  );
}
