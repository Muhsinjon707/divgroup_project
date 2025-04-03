import { StaticImageData } from "next/image";

export default interface PortfolioItem {
  id: number;
  logo?: string | StaticImageData;
  title: string;
  subtitle: string;
  images: {
    primary?: StaticImageData;
    additional?: {
      first?: StaticImageData;
      second?: StaticImageData;
      third?: StaticImageData;
      fourth?: StaticImageData;
    };
  };
  description: string;
}
