import Image, { StaticImageData } from "next/image";
import { Header } from "./header";

interface HeroProps {
  alt: string;
  image: StaticImageData;
  title: string;
}

export function Hero({ image, alt, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute -z-10 inset-0">
        <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="flex justify-center items-center pt-48">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
