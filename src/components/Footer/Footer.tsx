"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import axios from "axios";
import Logo from "@/src/assets/site-logo.svg";

// React icons
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Footer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const sendTelegramMessage = async () => {
    const message = `Telefon raqami: ${phoneNumber}`;

    const botToken = "7442986290:AAHP8DQmivWxcQFe5o5fzBi2MA8IhxJozYs";
    const chatId = "-1002177257723";

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      setPhoneNumber("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendTelegramMessage();
  };

  return (
    <div className="footer bg-[#1a2331] pt-[6rem] max-md:pt-[4rem]">
      <div className="container mx-auto">
        <div className="footer-top pb-[4rem] max-md:pb-[3rem] flex gap-10">
          <div className="flex flex-col items-start justify-between">
            <Link className="header__logo flex justify-center gap-10" href="/">
              <Image src={Logo} alt="site logo" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DIV GROUP
              </span>
            </Link>
            <div className="flex flex-col items-start justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-5 bg-[#203037] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#1E333D] transition">
                <FiPhoneCall className="text-blue-500" />
                <span>Aloqa uchun: +998 91 397 71 81</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-5 bg-[#203037] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#1E333D] transition">
                <CiLocationOn className="text-blue-500" />
                <span>Farg'ona, O'zbekiston.</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-20">
            <ul className="footer-nav flex flex-col items-center gap-6">
              <li className="px-6 py-3 bg-[#203037] text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-[#1E333D] transition">
                Category
              </li>
              {["Home", "About", "Services", "Reviews", "Article"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      className="text-gray-600 text-2xl block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                      href="/"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <ul className="footer-nav flex flex-col items-center gap-6">
              <li className="px-6 py-3 bg-[#203037] text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-[#1E333D] transition">
                About
              </li>
              {["Partners", "Careers", "Press", "Community", "Support"].map(
                (item, index) => (
                  <li key={index} className="relative">
                    <Link
                      className="text-gray-600 text-2xl block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                      href="/"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="footer-form-section text-white footer-nav flex flex-col gap-[1.4rem]">
            <p className="inline bg-[#17262D] px-4 py-3 font-semibold rounded-lg shadow-md hover:bg-[#1E333D] transition">
              Aloqa uchun
            </p>
            <p className="text-gray-text-color text-[16px]">
              Biz bilan bog’lanish uchun telefon raqamingizni kiriting
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full py-[1.2rem] px-[2rem] placeholder:text-[1.6rem] outline-gray-text-color mb-4"
                type="number"
                placeholder="raqamingizni kiriting"
                value={phoneNumber}
                onChange={handleInputChange}
              />
              <button
                className="primary-btn w-full justify-center"
                type="submit"
              >
                <span>Yuborish</span>
                <span>Yuborish</span>
                <span>Yuborish</span>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom flex border-t-2 py-[2rem]">
          <p className="text-gray-text-color">
            © 2024 Div Group - Barcha xizmatlar litsenziyalangan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
