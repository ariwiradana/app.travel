import ButtonFillWhite from "@/components/elements/button";
import Logo from "@/components/elements/icons/logo";
import Link from "next/link";
import React from "react";
import Container from "../container";

const Menu = [
  { label: "Destinations", path: "/destinations" },
  { label: "Tours", path: "/tours" },
  { label: "About Us", path: "/about-us" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <Container>
        <div className="flex justify-between items-center w-full h-20 md:h-28 lg:h-36">
          <div>
            <Logo />
          </div>
          <div className="h-full items-center md:gap-x-8 lg:gap-x-10 hidden md:flex">
            {Menu?.map(({ label, path }) => (
              <Link
                key={`navbar-${path}`}
                href={path}
                className="font-montserrat text-sm lg:text-base leading-6 font-semibold lg:font-bold text-white"
              >
                {label}
              </Link>
            ))}
            <Link target="_blank" href="https://wa.me/15551234567">
              <ButtonFillWhite title="Booking" />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
