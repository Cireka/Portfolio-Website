"use client";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Fragment, useEffect, useState } from "react";
import { navLinks } from "../Constants";
import { styles } from "../style";
type mediaQueryType = {
  matches: boolean;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSmallSCreen, setSmallScreen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 770px)");
    setSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (event: mediaQueryType) => {
      setSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      } w-full flex items-center py-5 fixed top-0 z-30  ${
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
        <div className="flex w-full items-center justify-end gap-[48px] mb-3">
          <div className="flex flex-col justify-center items-end">
            {isSmallSCreen && (
              <Fragment>
                {!mobileMenu && (
                  <AiOutlineMenu
                    onClick={() => setMobileMenu(true)}
                    className="w-[25px] h-[25px]"
                  />
                )}
                {mobileMenu && (
                  <AiOutlineClose
                    onClick={() => setMobileMenu(false)}
                    className="w-[25px] h-[25px]"
                  />
                )}
              </Fragment>
            )}
            {mobileMenu && (
              <div className="w-[80px] h-[60px] flex flex-col gap-1 items-start justify-start items-end">
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
            )}
          </div>
          {!isSmallSCreen &&
            navLinks.map((link) => {
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
