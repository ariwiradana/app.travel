import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import ButtonFillWhite from "@/components/elements/button/button-fill-white";
import Logo from "@/components/elements/icons/logo";
import useNavbar from "@/hooks/navbar/useNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Container from "../container";

const Menu = [
  { label: "Home", path: "/" },
  { label: "Tours", path: "/tours" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const { isTop } = useNavbar();
  const { pathname } = useRouter();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all ease-in-out duration-500 border-b ${
        isTop
          ? "bg-transparent border-b-transparent"
          : "bg-white border-b-gray-300"
      }`}
    >
      <Container>
        <div
          className={`flex justify-between items-center w-full transition-all ease-in-out duration-500 ${
            pathname == "/" && isTop ? "h-20 md:h-28 lg:h-36" : "h-20"
          }`}
        >
          <div>
            <Logo className={isTop ? "text-white" : "text-black"} />
          </div>
          <div className="h-full items-center md:gap-x-8 lg:gap-x-10 hidden md:flex">
            {Menu?.map(({ label, path }) => (
              <Link
                key={`navbar-${path}`}
                href={path}
                className={`font-montserrat text-sm lg:text-base leading-6 font-semibold lg:font-bold transition-all ease-in-out duration-500 ${
                  isTop ? "text-white" : "text-black"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link target="_blank" href="https://wa.me/15551234567">
              {isTop ? (
                <ButtonFillWhite title="Booking" />
              ) : (
                <ButtonFillDark title="Booking" />
              )}
            </Link>
          </div>
          <div className="md:hidden">
            <HiOutlineMenuAlt1
              size={20}
              className={`transform rotate-180 ${
                isTop ? "text-white" : "text-black"
              }`}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
