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

function Services() {
  return (
    <>
      {/* serivices top */}
      {/* <section className="services pt-[12rem] max-md:pt-[8rem] text-center">
      <div className="container">
        <h2 className="section-title">We Provide the Best Web services</h2>
         <ul className="border-2 rounded-[1.7rem]">
          <li>
            <div className="rounded-[15px] w-[100px] h-[90px] bg-primary flex items-center justify-center  mb-[2.4rem]">
              <FaRocket className="text-6xl text-white"/>
            </div>
            <h2 className="text-5xl mb-[1.2rem]">5200+</h2>
            <p className="text-gray-text-color">Projects completed</p>
          </li>
          <li>
            <div className="rounded-[15px] w-[100px] h-[90px] bg-secondary flex items-center justify-center  mb-[2.4rem]">
              <FaUsers className="text-6xl text-white"/>
            </div>
            <h2 className="text-5xl mb-[1.2rem]">500+</h2>
            <p className="text-gray-text-color">Active clients</p>
          </li>
          <li>
            <div className="rounded-[15px] w-[100px] h-[90px] bg-[#79E28A] flex items-center justify-center  mb-[2.4rem]">
              <AiTwotoneLike className="text-6xl text-white"/>
            </div>
            <h2 className="text-5xl mb-[1.2rem]">4500+</h2>
            <p className="text-gray-text-color">Happy clients</p>
          </li>
         </ul>
      </div>
    </section> */}

      {/* services bottom */}
      
        <section className="main-services text-center pt-[6rem]">
          <div className="container">
            <h2 className="section-title max-md:mb-[5rem]">
              Bizning xizmatlar
            </h2>
            <ul id="#services">
              <li className="rounded-[2.3rem] bg-white px-[2.2rem] flex items-center flex-col pb-[2rem]">
                <div className="mt-[-50px] rounded-full bg-site-bg-color p-[1.2rem] mb-[2.4rem]">
                  <div className="rounded-full w-[100px] h-[100px] flex items-center justify-center bg-white">
                    <Image
                      src={web_design}
                      alt="web design"
                      width="50"
                      height="50"
                    />
                  </div>
                </div>
                <h2 className="text-5xl max-md:text-4xl mb-[1.2rem]">SMM</h2>
                <p className="text-gray-text-color text-[1.6rem] mb-[1.8rem]">
                  Auditoriyangizni kengaytiring, brend xabardorligini oshiring,
                  faollikni va savdoni oshiring.
                </p>
                <Link
                  className="rounded-full p-[1.8rem] bg-site-bg-color"
                  href="/"
                >
                  <FaArrowRightLong />
                </Link>
              </li>

              <li className="rounded-[2.3rem] bg-white px-[2.2rem] flex items-center flex-col pb-[2rem]">
                <div className="mt-[-50px] rounded-full bg-site-bg-color p-[1.2rem] mb-[2.4rem]">
                  <div className="rounded-full w-[100px] h-[100px] flex items-center justify-center bg-primary">
                    <Image
                      src={web_development}
                      alt="web design"
                      width="50"
                      height="50"
                    />
                  </div>
                </div>
                <h2 className="text-5xl max-md:text-4xl mb-[1.2rem]">
                  Web sayt
                </h2>
                <p className="text-gray-text-color text-[1.6rem] mb-[1.8rem]">
                  Sizning biznesingizning Internetdagi yuzi. <br /> Tovar va
                  xizmatlarni sotish platformasi. <br /> Umid va Ishonchni
                  shakllantirish vositasi
                </p>
                <Link className="rounded-full p-[1.8rem] bg-primary" href="/">
                  <FaArrowRightLong className="text-white" />
                </Link>
              </li>

              <li className="rounded-[2.3rem] bg-white px-[2.2rem] flex items-center flex-col pb-[2rem]">
                <div className="mt-[-50px] rounded-full bg-site-bg-color p-[1.2rem] mb-[2.4rem]">
                  <div className="rounded-full w-[100px] h-[100px] flex items-center justify-center bg-white">
                    <Image
                      src={application}
                      alt="web design"
                      width="50"
                      height="50"
                    />
                  </div>
                </div>
                <h2 className="text-5xl max-md:text-4xl mb-[1.2rem]">
                  CRM va ERP
                </h2>
                <p className="text-gray-text-color text-[1.6rem] mb-[1.8rem]">
                  Vaqt va resurslarni tejang <br /> Ish samaradorligini oshirish
                  va imkoniyatlarni kengaytiring
                </p>
                <Link
                  className="rounded-full p-[1.8rem] bg-site-bg-color"
                  href="/"
                >
                  <FaArrowRightLong />
                </Link>
              </li>
            </ul>
          </div>
        </section>
    </>
  );
}

export default Services;
