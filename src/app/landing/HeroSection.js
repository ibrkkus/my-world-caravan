import Image from "next/image";

import CaravanImg from "@/../public/caravan-hero2.png";
import MedalIcon from "@/../public/medal.svg";

export default function HeroSection() {
  return (
    <div className="lg:container mx-5 lg:mx-auto grid grid-cols-12 gap-8 items-center justify-between py-4 sm:py-8">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4 order-2 lg:order-1 text-center lg:text-left max-w-2xl mx-auto">
        <h1 className="text-3xl lg:text-4xl mb-4 font-semibold text-antresit-light">
          KENDİ DÜNYANI <span className="text-earthgreen">KEŞFET!</span>
        </h1>
        <p className="text-antresit-light leading-7 mb-4">
          Karavan işi bir zevk işi, bazen macera, bazen huzurlu bir orman
          havası, bazen bir sahil kenarında veya dünyanın öbür ucunda, nerede
          olmak istersen seninle!
        </p>
        <a
          href="#footer"
          className="bg-earthgreen hover:bg-earthgreen-dark text-white py-3 px-6 inline-block rounded-lg"
        >
          Hemen İletişime Geç
        </a>
      </div>
      <div className="col-span-12 order-1 mx-auto lg:order-2 lg:col-span-7 lg:col-start-6 relative">
        <Image
          src={CaravanImg}
          alt="tentesi acik beyaz karavan resmi"
          className="mx-auto lg:ml-auto lg:mr-10 w-full h-auto"
        />
        <div
          className="absolute z-20 right-6 mt-2  bg-white flex items-center py-2 px-2 rounded-lg"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            top: "25%",
          }}
        >
          <Image src={MedalIcon} alt="medal icon" className="mr-2" />
          <span className="font-semibold text-sm">
            Hafiflikte <br /> Rekortmen
          </span>
        </div>
      </div>
    </div>
  );
}
