import Link from "next/link";
import React from "react";
import ThemeToggle from "./themetoggle";
import Icons from "./icons";

const Header = () => {
  return (
    <header className="fixed top-0 bg-opacity-30 backdrop-filter  backdrop-blur-md py-4 px-6 flex justify-between items-center animate-fadeInUp w-full z-50 border-b-[0.5px] border-orange-100 dark:border-stone-700">
      <div className="text-3xl font-extrabold tracking-tight ">
        <Link href={"/"}>
          <span className="text-title dark:text-title text-2xl laptop:text-4xl">
            Semi
          </span>
          <span className="text-otherblack dark:text-background text-2xl laptop:text-4xl">
            colonist
          </span>
        </Link>
      </div>
      <nav className="space-x-4 flex items-center">
        {/* Social media icons  <Icons></Icons> */}

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
