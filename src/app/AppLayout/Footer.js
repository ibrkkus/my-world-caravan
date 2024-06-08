import Image from "next/image";

import LogoLight from "@/../public/logo-light.png";
import IconEmail from "@/../public/icon-email.svg";

import IconOldPhone from "@/components/IconOldPhone";
import IconPhone from "@/components/IconPhone";
import IconInstagram from "@/components/IconInstagram";

export default function Footer() {
  return (
    <div className="bg-antresit-dark" id="footer">
      <div className="text-white text-sm py-12 lg:container mx-5 lg:mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        <div className="mr-4">
          <a href="#">
            <Image
              src={LogoLight}
              alt="My World turkey logo"
              className="mb-6"
            />
          </a>
          <p className="leading-6 mb-4">
            Yılların otomativ ve karavan yapım tecrübesi ile donanımlı ekibimiz,
            aşkla ve heyecanla, yüksek kalite ekipmanı birleştirip lüks ortamlar
            üretiyoruz.
          </p>
          <p className="leading-6 mb-4 sm:mb-0">
            Hedefimiz sizlerin memnuniyeti, güvenli ve rahat vakit geçirmeniz
            için en iyisini üretmek. Umarız memnun kalırsınız.
          </p>
        </div>
        <div className="text-left sm:text-right lg:text-left">
          <a
            href="#"
            className="text-sm block mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
          >
            Anasayfa
          </a>
          <a
            href="#caravan"
            className="text-sm block mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
          >
            Karavan
          </a>
          <a
            href="#gallery"
            className="text-sm block mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
          >
            Galeri
          </a>
          <a
            href="#technical"
            className="text-sm block mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
          >
            Teknik Detaylar
          </a>
          <div className="relative">
            <div
              className="mb-3 absolute sm:right-0 lg:left-0"
              style={{
                height: 1,
                background: "#D4D4D4",
                opacity: "40%",
                width: 80,
              }}
            ></div>
          </div>
          <a
            className="flex items-center justify-start sm:justify-end lg:justify-start mt-6 mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
            href="tel:+902167667027"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconOldPhone
              alt="old phone icon"
              className="mr-2 sm:ml-2 sm:mr-0 lg:ml-0 lg:mr-2 sm:order-2 lg:order-1"
            />
            <div className="sm:order-1 lg:order-2">0216 766 70 27</div>
          </a>
          <a
            className="flex items-center justify-start sm:justify-end lg:justify-start mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
            href="tel:+902167667027"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPhone
              alt="cell phone icon"
              className="mr-2 sm:ml-2 sm:mr-0 lg:ml-0 lg:mr-2 sm:order-2 lg:order-1"
            />
            <div className="sm:order-1 lg:order-2">0507 766 70 27</div>
          </a>

          <a
            className="flex items-center justify-start sm:justify-end lg:justify-start mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
            href="mailto:myworldcaravanturkey@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={IconEmail}
              alt="email icon"
              className="mr-2 sm:ml-2 sm:mr-0 lg:ml-0 lg:mr-2 sm:order-2 lg:order-1"
            />
            <div className="sm:order-1 lg:order-2">
              myworldcaravanturkey@gmail.com
            </div>
          </a>
          <a
            className="flex items-center justify-start sm:justify-end lg:justify-start mb-3 hover:text-earthgreen-dark transition duration-150 ease-out"
            href="https://www.instagram.com/myworldcaravanturkey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram
              alt="instagram icon"
              className="mr-2 sm:ml-2 sm:mr-0 lg:ml-0 lg:mr-2 sm:order-2 lg:order-1 text-white"
            />
            <div className="sm:order-1 lg:order-2">myworldcaravanturkey</div>
          </a>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.1404059761367!2d29.166130176766185!3d40.91266722530545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac545673fe987%3A0x57783d100c34c3c2!2sMy%20World%20Caravan%20Turkey!5e0!3m2!1sen!2str!4v1717872573747!5m2!1sen!2str"
            style={{
              border: "0",
              width: "100%",
              height: 300,
              borderRadius: 10,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
