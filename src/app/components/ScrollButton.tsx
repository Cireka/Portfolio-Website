"use client";
import { motion } from "framer-motion";
export const ScrollButton = () => {
  return (
    <div className="w-full flex justify-center absolute top-[860px]">
      <a href="#About">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </a>
    </div>
  );
};
