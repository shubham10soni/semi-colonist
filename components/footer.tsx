import { poppins } from "@/utils/fonts";
import React from "react";

const Footer = () => {
  return (
    <footer className="  flex flex-col  justify-center laptop:ml-24 mt-5  laptop:mr-24   bottom-0  py-8 z-0   border-t-[1px] border-zinc-100 dark:border-zinc-800 ">
      <div className="container mx-auto max-h-10  text-center">
        <p className={`text-sm ${poppins} `}>
          &copy; {new Date().getFullYear()} SemiColonised. All rights reserved.
        </p>
        <p className={`mt-2 text-xs  ${poppins} text-zinc-500`}>
          made with 🤍 by
          <span
            className={`font-semibold ${poppins}  text-transparent bg-gradient-to-r from-sky-600 to-emerald-500  dark:bg-gradient-to-r dark:from-sky-200 dark:to-emerald-200   inline-block bg-clip-text pl-1  animate-pulse tracking-wide`}
          >
            Shubham
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
