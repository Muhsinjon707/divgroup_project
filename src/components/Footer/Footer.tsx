"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import axios from "axios";
import Logo from "@/src/assets/site-logo.svg";

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
    <div className="footer pt-[6rem] max-md:pt-[4rem]">
      <div className="container">
        <div className="footer-top pb-[4rem] max-md:pb-[3rem] flex">
          <div>
            <Link className="header__logo mb-[1.8rem]" href="/">
              <Image src={Logo} alt="site logo" />
              <span>DIV</span>
            </Link>
            <p className="text-gray-text-color mb-[1.8rem]">
              Farg'ona, O'zbekiston.
            </p>
            <p className="text-gray-text-color">
              Aloqa uchun: +998 91 397 71 81
            </p>
          </div>

          {/* <ul className="footer-nav flex flex-col gap-[1.4rem]">
            <li className="font-[500]">Category</li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Article
              </Link>
            </li>
          </ul>
          <ul className="footer-nav flex flex-col gap-[1.4rem]">
            <li className="font-[500]">About</li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Partners
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Press
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Community
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-text-color text-[16px] hover:text-primary"
                href="/">
                Support
              </Link>
            </li>
          </ul> */}
          <div className="footer-form-section footer-nav flex flex-col gap-[1.4rem]">
            <p className="font-[500]">Aloqa uchun</p>
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
                type="submit">
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
