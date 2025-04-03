"use client";
import { motion, useAnimation, animate, AnimatePresence,   useMotionTemplate,
  useMotionValue, } from "framer-motion";
//   import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import appImg from "../../assets/site-logo.svg";
import ImageAnimation from "../ui/ImageAnimation ";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { MdOutlineQueryStats } from "react-icons/md";


const COLORS_TOP = [ "#1E67C6"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const controlsImage = useAnimation();
  const color = useMotionValue(COLORS_TOP[0]);


  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    controls.start({ opacity: 10, y: 55 });
  }, []);

  useEffect(() => {
    controlsImage.start({ opacity: 7, y: 100 });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.section style={{
      // backgroundImage,
    }} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen text-white">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="sticky top-0 flex justify-between items-center p-4 md:p-6 md:px-[80px] backdrop-blur-md shadow-lg z-50"
      >
        <Link
          href="/"
          className="text-lg md:text-3xl font-bold text-white flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={appImg}
            alt="logo"
            width={35}
            height={35}
            className="hover:rotate-12 transition-transform duration-300"
          />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DIV group
          </span>
        </Link>

        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="hidden md:flex text-white hover:text-blue-400 focus:outline-none"
          >
            <IoClose className="w-10 h-10" />
          </button>
        )}

      
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-blue-400 focus:outline-none"
        >
          {isMenuOpen ? (
            <IoClose className="w-10 h-10" />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="hidden md:flex space-x-6 items-center text-[17px] font-semibold text-white"
        >
          <Link
            href="#main"
            className="text-white hover:text-blue-400 relative group pb-2"
          >
            главная
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#AboutUs"
            className="text-white hover:text-blue-400 relative group pb-2"
          >
            о нас
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#service"
            className="text-white hover:text-blue-400 relative group pb-2"
          >
            наши услуги
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-400 relative group pb-2"
          >
            этапы работы
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-400 relative group pb-2"
          >
            стоимость
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="text-[#1E67C6] font-bold hover:scale-105 transition-transform duration-300">
            +99891 397 71 81
          </span>
          <Link
            href="https://t.me/@shox_dev"
            className="px-5 py-4 rounded-md bg-[#1E67C6] hover:bg-[#3273e6] transition-colors duration-300 relative group"
          >
            <FaTelegram className="text-4xl" />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Telegram
            </span>
          </Link>
          <Link
            href="https://www.instagram.com/divgroup.uz/"
            className="px-5 py-4 rounded-md bg-[#1E67C6] hover:bg-[#3273e6] transition-colors duration-300 relative group"
          >
            <FaInstagram className="text-4xl" />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Instagram
            </span>
          </Link>
        </motion.div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2 }}
              className="md:hidden absolute top-16 left-0 w-full min-h-screen bg-gray-800/90 p-4 rounded-b-lg shadow-md backdrop-blur-md mt-14"
            >
              {/* Mobile Menu Links */}
              <div className="flex flex-col items-center space-y-4 text-white">
                <Link href="#main" className="hover:text-blue-400 pb-2">
                  главная
                </Link>
                <Link href="#AboutUs" className="hover:text-blue-400 pb-2">
                  о нас
                </Link>
                <Link href="#service" className="hover:text-blue-400 pb-2">
                  наши услуги
                </Link>
                <Link href="/contact" className="hover:text-blue-400 pb-2">
                  этапы работы
                </Link>
                <Link href="/contact" className="hover:text-blue-400 pb-2">
                  стоимость
                </Link>
              </div>
              <div className="mt-6 text-center">
                <span className="block text-[#1E67C6] font-bold">
                  +99891 397 71 81
                </span>
                <div className="flex justify-center space-x-4 mt-2">
                  <Link
                    href="https://t.me/@shox_dev"
                    className="px-3 py-2 rounded bg-[#1E67C6] hover:bg-[#3273e6] transition-colors duration-300"
                  >
                    <FaTelegram />
                  </Link>
                  <Link
                    href="https://instagram.com/@shox_dev"
                    className="px-3 py-2 rounded bg-[#1E67C6] hover:bg-[#3273e6] transition-colors duration-300"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="container_2 flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Разработка мобильных приложений и сервисов
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl text-gray-300 mb-6 flex items-center gap-5"
          >
            <GoRocket className="text-5xl" /> Знаем, как решить вашу задачу
            оптимальным способом
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-3xl text-gray-300 mb-8 flex items-center gap-5"
          >
            <MdOutlineQueryStats className="text-5xl" /> Подберем подходящее
            решение с учетом целей и возможностей
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col md:mt-28 md:flex-row space-y-4 md:space-y-0 md:space-x-16"
          >
            <button className="bg-[#1E67C6] text-white px-11 py-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl">
              Заказать приложение
            </button>
            <button className="mt-4 md:mt-0 bg-transparent text-white px-8 py-3 rounded-lg border border-white hover:bg-white/10 transition duration-300 shadow-lg hover:shadow-xl">
              Онлайн-консультация
            </button>
          </motion.div>
        </motion.div>
        <ImageAnimation />
      </div>
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
    </motion.section>
  );
};

export default Header;
