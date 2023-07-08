"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "../Constants";
import Link from "next/link";
import { styles } from "../style";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-30 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex w-full items-center">
          <a
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 "
          >
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Tsotne | ReactJs Developer
            </p>
          </a>
        </div>
        <div className="flex w-full items-center justify-end gap-[48px]">
          {navLinks.map((link) => {
            return (
              <a
                key={link.id}
                className="flex items-center gap-2 "
                href={`#${link.id}`}
              >
                <p className={styles.NavLinks}>{link.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
