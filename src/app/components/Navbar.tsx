"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { styles } from "../style";

const Navbar = () => {
  const [active, setActive] = useState("false");

  return (
    <nav
      className={`${styles.paddingX} w-full  flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex w-full items-center">
          <Link
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 "
            href={"/"}
          >
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Tsotne| ReactJs Developer
            </p>
          </Link>
        </div>
        <div className="flex w-full items-center justify-end gap-[48px]">
          <Link
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 "
            href={"/"}
          >
            <p className={styles.NavLinks}>Work</p>
          </Link>
          <Link
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 "
            href={"/"}
          >
            <p className={styles.NavLinks}>About</p>
          </Link>
          <Link
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 "
            href={"/"}
          >
            <p className={styles.NavLinks}>Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
