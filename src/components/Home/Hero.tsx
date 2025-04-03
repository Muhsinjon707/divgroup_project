import React from "react";
import Logo from "@/src/assets/logo-hero.svg";
import LogoLittle from "@/src/assets/logo-hero-little.svg";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { Metadata } from "next";

function Hero() {
  return (
    <section className="hero bg-gray-800 pt-[5rem] max-md:pt-[0]">
      <div className="container mx-auto flex gap-10 items-center justify-between max-md:flex-col-reverse">
        <div className="w-full max-w-[536px] max-md:text-center">
          <h1 className="text-white text-[7.2rem] mb-[4rem] max-sm:mb-[2rem] max-lg:text-[6rem] max-sm:text-[4rem]">
            Div Group
          </h1>
          <p className="mb-[2rem] text-gray-text-color max-sm:mb-[2rem]">
            Bugungi kunda onlayn mavjudlik har qanday biznes muvaffaqiyatining
            kalitidir.
          </p>
          <p className="mb-[4rem] text-gray-text-color max-sm:mb-[2rem]">
            Biz sizga maqsadlarga erishishda ishonchli yordamchingiz bo'ladigan
            sayt yaratishda yordam beramiz.
          </p>
          <Link className="primary-btn" href="tel:+998913977181">
            <span>Bepul konsultatsiya</span>
            <span>Bepul konsultatsiya</span>
            <span>Bepul konsultatsiya</span>
          </Link>
        </div>

        <div className="flex justify-end items-center relative w-[40%] overflow-hidden">
          <Image
            className="object-contain w-[90%]"
            src={Logo}
            alt="logo"
            width="500"
            height="500"
          />
          <Image
            className="object-contain w-[90%] absolute top-0 left-20"
            // animate-[spin_10s_linear_reverse_infinite]
            src={LogoLittle}
            alt="logo"
            width="500"
            height="500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
