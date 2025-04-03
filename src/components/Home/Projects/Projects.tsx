import React from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import zamanTravel from "@/src/assets/zamantravel.png";
import modernkids from "@/src/assets/modernkids.png";
import cardiofergana from "@/src/assets/cardiofergana.png";
import qim from "@/src/assets/qim.png";
import apollon from "@/src/assets/apollon.png";
import grandmill from "@/src/assets/grandmill.png";
import biointech from "@/src/assets/biointech.png";
import ansormall from "@/src/assets/ansormall.png";
import riobsia from "@/src/assets/rio-bsia.png";
import ramziddin from "@/src/assets/ramziddin.png";

function Projects() {
  return (
    <div className="projects pt-[5.4rem] text-center">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <ul className="mb-[5rem] max-md:mb-[4rem]" id="#portfolio">
          <li className="shadow-md">
            <Link
              className="w-full h-full text-centery"
              href="https://cardiofergana.uz"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={riobsia}
                alt="Kardiologiya markazi"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                RIO-BSIATM
              </p>
            </Link>
          </li>
          <li className="shadow-md">
            <Link
              className="w-full h-full text-centery"
              href="https://ansormall.uz"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={ansormall}
                alt="Kardiologiya markazi"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                AnsorMall
              </p>
            </Link>
          </li>
          <li className="shadow-md">
            <Link
              className="w-full h-full text-centery"
              href="https://ramziddin-servis.uz"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={ramziddin}
                alt="Kardiologiya markazi"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                Ramziddin Servis
              </p>
            </Link>
          </li>
          <li className="shadow-md">
            <Link
              className="w-full h-full text-centery"
              href="https://cardiofergana.uz"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={cardiofergana}
                alt="Kardiologiya markazi"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                Kardiologiya markazi
              </p>
            </Link>
          </li>
          <li className="shadow">
            <Link
              className="w-full h-full text-centery"
              href="https://modernkids.uz"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={modernkids}
                alt="ModernKids"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                ModernKids
              </p>
            </Link>
          </li>
          <li className="shadow">
            <Link
              className="w-full h-full text-centery"
              href="https://qirguli-issiqlik.uz/"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={qim}
                alt="Qirguli issiqlik manbai"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                Qirguli issiqlik manbai
              </p>
            </Link>
          </li>
          <li className="shadow">
            <Link
              className="w-full h-full text-centery"
              href="https://apollon-injiniring.uz/"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={apollon}
                alt="Apollon Injiniring"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                Apollon Injiniring
              </p>
            </Link>
          </li>
          <li className="shadow">
            <Link
              className="w-full h-full text-centery"
              href="https://grandmillgroup.uz/"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={grandmill}
                alt="Grand Mill Group"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                Grand Mill Group
              </p>
            </Link>
          </li>
          <li className="shadow">
            <Link
              className="w-full h-full text-centery"
              href="https://www.biointech.uz/"
              target="_blank"
            >
              <Image
                className="w-full h-full object-cover object-top"
                src={biointech}
                alt="BioInTech"
              />
              <p className="text-gray-text-color bg-white absolute bottom-0 left-0 w-full py-[1rem]">
                BioInTech
              </p>
            </Link>
          </li>
        </ul>
        {/* <Link className='primary-btn' href="/">
                <span>View all Projects</span>
                <span>View all Projects</span>
                <span>View all Projects</span>
              </Link> */}
      </div>
    </div>
  );
}

export default Projects;
