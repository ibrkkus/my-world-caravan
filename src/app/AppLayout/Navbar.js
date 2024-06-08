"use client";

import { useState } from "react";
import Image from "next/image";

import LogoDark from "@/../public/logo-dark.png";
import IconMenu from "@/../public/icon-menu.svg";
import IconClose from "@/../public/icon-close.svg";
import IconLocation from "@/components/IconLocation.js";
import IconOldPhone from "@/components/IconOldPhone";
import IconPhone from "@/components/IconPhone";
import IconInstagram from "@/components/IconInstagram";

export default function Navbar() {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <div className="bg-antresit-light">
          <div className="text-white text-sm lg:container mx-5 lg:mx-auto flex justify-between">
            <a
              className="flex items-center py-1 px-3 relative -left-3 hover:bg-antresit-dark transition duration-150 ease-out"
              href="https://maps.app.goo.gl/5PgRpAsvhQ2WYdpaA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLocation className="mr-2 text-white" />
              Cevizli, Denizer Cd. No:16, 34865 Kartal / İstanbul
            </a>
            <div className="flex">
              <a
                className="flex items-center py-1 lg:mr-12 px-3 hover:bg-antresit-dark transition duration-150 ease-out"
                href="tel:+902167667027"
              >
                <IconOldPhone alt="old phone icon" className="mr-2" />
                0216 766 70 27
              </a>
              <a
                className="flex items-center py-1 px-3 -right-3 relative hover:bg-antresit-dark transition duration-150 ease-out"
                href="tel:+905077667027"
              >
                <IconPhone alt="cell phone icon" className="mr-2" />
                0507 766 70 27
              </a>
            </div>
          </div>
        </div>

        <div className="lg:container mx-5 lg:mx-auto py-4 flex justify-between items-center">
          <a href="#">
            <Image src={LogoDark} alt="My World turkey logo" className="w-32" />
          </a>
          <div className="text-antresit-dark">
            <a href="#" className="text-sm mr-10">
              Anasayfa
            </a>
            <a href="#caravan" className="text-sm mr-10">
              Karavan
            </a>
            <a href="#gallery" className="text-sm mr-10">
              Galeri
            </a>
            <a href="#technical" className="text-sm mr-10">
              Teknik Detaylar
            </a>
            <a href="#footer" className="text-sm">
              İletişim
            </a>
          </div>
        </div>
      </div>

      <div
        className="block md:hidden px-4 pt-2 fixed z-30 bg-white w-full"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
        <div className="">
          <a href="#">
            <Image
              src={LogoDark}
              alt="My World turkey logo"
              className={`w-28 mb-2`}
            />
          </a>

          <a
            href="#"
            className={`absolute right-4 top-5 ${mobileMenuState && "hidden"}`}
            onClick={() => setMobileMenuState(true)}
          >
            <Image src={IconMenu} alt="menu icon" />
          </a>

          <a
            href="#"
            className={`absolute right-4 top-5 ${!mobileMenuState && "hidden"}`}
            onClick={() => setMobileMenuState(false)}
          >
            <Image src={IconClose} alt="menu close icon" />
          </a>

          <div
            className={`text-antresit-dark h-lvh text-center flex flex-col justify-center ${
              !mobileMenuState && "hidden"
            }`}
          >
            <a
              onClick={() => setMobileMenuState(false)}
              href="#"
              className="text-sm mb-3 block"
            >
              Anasayfa
            </a>
            <a
              onClick={() => setMobileMenuState(false)}
              href="#caravan"
              className="text-sm mb-3 block"
            >
              Karavan
            </a>
            <a
              onClick={() => setMobileMenuState(false)}
              href="#gallery"
              className="text-sm mb-3  block"
            >
              Galeri
            </a>
            <a
              onClick={() => setMobileMenuState(false)}
              href="#technical"
              className="text-sm mb-3 block"
            >
              Teknik Detaylar
            </a>
            <a
              onClick={() => setMobileMenuState(false)}
              href="#footer"
              className="text-sm mb-3 block"
            >
              İletişim
            </a>
            <div className="relative">
              <div
                className="mx-auto bg-antresit-dark"
                style={{
                  height: 1,
                  opacity: "40%",
                  width: 80,
                }}
              ></div>
            </div>
            <div className="flex mt-4 mb-4 justify-center">
              <a
                className="transition duration-150 ease-out px-2 "
                href="tel:+902167667027"
                onClick={() => setMobileMenuState(false)}
              >
                <IconOldPhone
                  alt="old phone icon"
                  className="text-antresit-dark"
                />
              </a>
              <a
                className="transition duration-150 ease-out px-2 "
                href="tel:+905077667027"
                onClick={() => setMobileMenuState(false)}
              >
                <IconPhone
                  alt="cell phone icon"
                  className="text-antresit-dark"
                />
              </a>
              <a
                className="transition duration-150 ease-out  px-2 "
                href="https://maps.app.goo.gl/5PgRpAsvhQ2WYdpaA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuState(false)}
              >
                <IconLocation
                  alt="location icon"
                  className="mr-2 h-auto text-antresit-dark"
                />
              </a>
              <a
                className="transition duration-150 ease-out  px-2 "
                href="https://www.instagram.com/myworldcaravanturkey/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuState(false)}
              >
                <IconInstagram
                  alt="instagram icon"
                  className="h-auto text-antresit-dark"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
