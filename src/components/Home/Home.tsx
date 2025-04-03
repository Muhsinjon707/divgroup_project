import Image from "next/image";
import "./style.css";
import Phone from "@/src/assets/phone.gif";
import Link from "next/link";
import Services from "./Services/Services";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Team from "./Team/Team";
import { Metadata } from "next";
import {
  FadeIn,
  SlideIn,
  StaggeredContainer,
  StaggeredItem,
  ScaleRotate,
  Parallax,
} from "../ui/AnimationsToUse";
import ScrollStickySection from "./ServiceSection";
import ServiceSection from "./ServiceSection";
import { OurServices } from "./OurService";
import Portfolio from "./Portofolio/Portfolio";

function Home() {
  return (
    <>
      {/* <ServiceSection /> */}
      {/* <OurServices /> */}
        {/* <Hero /> */}

        {/* <Services /> */}

        {/* <Projects /> */}

      {/* <Team/> */}

      {/* Portfolio */}
      <Portfolio />

      {/* <Link
        className="phone-link flex items-center justify-center fixed bottom-10 right-10 w-[70px] h-[70px] bg-primary rounded-full z-50"
        href="tel:+998913977181"
      >
        <Image className="invert w-[30px] h-[30px]" src={Phone} alt="phone" />
      </Link> */}
    </>
  );
}

export default Home;


