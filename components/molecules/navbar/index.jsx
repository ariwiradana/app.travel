import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import ButtonFillWhite from "@/components/elements/button/button-fill-white";
import Logo from "@/components/elements/icons/logo";
import useSidebar from "@/hooks/sidebar/useSidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import Container from "../container";
import Sidebar from "../sidebar";

const Menu = [
  { label: "Home", path: "/" },
  { label: "Tours", path: "/tours" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const { setActive, active } = useSidebar();

  return (
    <>
      <nav
        className={`w-full z-20 transition-all ease-in-out duration-500 border-b`}
      >
        <Container>
          <div
            className={`grid grid-cols-3 lg:grid-cols-4 items-center w-full transition-all ease-in-out duration-500 h-16 lg:h-20`}
          >
            <Link href="/" className="lg:flex order-2 lg:order-1 hidden">
              <Logo className={`text-black`} />
            </Link>
            <div className="h-full items-center md:gap-x-8 lg:gap-x-10 hidden md:flex lg:justify-center lg:order-2 md:col-span-2">
              {Menu?.map(({ label, path }) => (
                <Link
                  key={`navbar-${path}`}
                  href={path}
                  className={`font-montserrat text-sm lg:text-base leading-6 font-semibold transition-all ease-in-out duration-500 text-black`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              target="_blank"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              className="flex justify-end order-3 lg:order-2 col-span-2 md:col-span-1"
            >
              <ButtonFillDark title="Book Now" size="sm" />
            </Link>
            <div className="md:hidden lg:ml-auto order-1">
              {active ? (
                <HiX onClick={() => setActive(false)} size={26} />
              ) : (
                <HiOutlineMenuAlt1
                  onClick={() => setActive(true)}
                  size={26}
                  className={`transform lg:rotate-180 text-black`}
                />
              )}
            </div>
          </div>
        </Container>
      </nav>
      <Sidebar active={active} data={Menu} />
    </>
  );
};

export default Navbar;
