import Image from "next/image";

import BrandAlko from "@/../public/brand-alko.png";
import BrandPorvaletti from "@/../public/brand-porvaletti.png";
import BrandDometic from "@/../public/brand-dometic.svg";
import BrandFiamma from "@/../public/brand-fiamma.svg";

export default function BrandSection() {
  return (
    <div className="lg:container mx-5 lg:mx-auto flex justify-between md:justify-center py-4 sm:py-12 md:py-3">
      <Image
        src={BrandAlko}
        alt="al-ko logosu"
        className="px-3 sm:px-0 md:mx-8 h-auto w-3/12 sm:w-2/12 md:w-1/12"
      />
      <Image
        src={BrandPorvaletti}
        alt="porvaletti logosu"
        className="px-3 sm:px-0 md:mx-8 h-auto w-3/12 sm:w-2/12 md:w-1/12"
      />
      <Image
        src={BrandDometic}
        alt="dometic logosu"
        className="px-3 sm:px-0 md:mx-8 h-auto w-3/12 sm:w-2/12 md:w-1/12"
      />
      <Image
        src={BrandFiamma}
        alt="fiamma logosu"
        className="px-3 sm:px-0 md:mx-8 h-auto w-3/12 sm:w-2/12 md:w-1/12"
      />
    </div>
  );
}
