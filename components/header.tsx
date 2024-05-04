import Link from "next/link";
import React from "react";
import ThemeToggle from "./themetoggle";
import Dropdown from "./dropdown";
import { beb_neu, int_er, wind_song } from "@/utils/fonts";

const Header = () => {
  return (
    <header className="  flex   top-0  bg-transparent dark:bg-transparent  py-4 px-6 justify-between   laptop:ml-24 laptop:mr-24  sticky  z-10  backdrop-blur-[2px] backdrop-filter  border-b-[1px] border-zinc-100 dark:border-zinc-800 ">
      <div className="text-3xl font-extrabold tracking-tight mt-1 ">
        <Link href={"/"}>
          <span
            className={`text-zinc-900 dark:text-white   laptop:text-4xl text-3xl  ${beb_neu}  tracking-widest laptop:text-4xl`}
          >
            Semi
          </span>
          <span
            className={`text-zinc-900 dark:text-white  laptop:text-4xl text-3xl ${beb_neu} tracking-widest laptop:text-4xl`}
          >
            colonised
          </span>
        </Link>
      </div>
      <nav className="space-x-4 flex items-center">
        <Dropdown></Dropdown>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
