// components/Dropdown.tsx
"use client";
import { beb_neu, int_er } from "@/utils/fonts";
import Link from "next/link";
import { useState } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className={` text-stone-600 bg-zinc-50/90 dark:bg-zinc-800 dark:text-zinc-50  ring-1  ring-zinc-300/40 hover:ring-zinc-500/20   ${int_er}  font-semibold  text-xs laptop:py-2 laptop:px-4 pl-3 pr-3 py-2   dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 hover:ring-white/30  rounded-3xl  `}
      >
        Menu
        <span className=" inline-block  pl-2 font-bold ">
          <svg
            fill="#808080"
            height="10px"
            width="10px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            stroke="#808080"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      {isOpen && (
        <>
          <div className=" absolute  p-px  overflow-hidden bg-gradient-to-b from-sky-600 left-1/2 -translate-x-[78%] translate-y-[30%] laptop:left-1/2 laptop:transform laptop:-translate-x-52  to-emerald-600 dark:from-emerald-400 dark:to-pink-400 rounded-xl backdrop:bg-opacity-50 laptop:w-56 laptop:h-45   w-80 z-10 ">
            <div className="absolute animate-spinslow bg-gradient-to-r  from-transparent    via-white/90 to-transparent  -top-40 -bottom-40 left-10 right-10 z-20"></div>
            <div className="relative   backdrop-blur-[2px] backdrop-filter    border bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 dark:border-white/10 border-gray-300 rounded-xl p-5 z-30 ">
              <button
                onClick={closeDropdown}
                className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 dark:hover:text-zinc-100 dark:text-zinc-300"
              >
                {/* Close button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                href="/articles"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 hover:rounded-xl dark:hover:bg-zinc-800  dark:text-zinc-200 border-b  dark:border-zinc-700"
                onClick={closeDropdown}
              >
                Articles
              </Link>

              <Link
                href="/about"
                className="block py-2 px-4 text-gray-800 dark:text-zinc-200 hover:rounded-xl   dark:hover:bg-zinc-800 hover:border-collapse mt-1 hover:bg-gray-200"
                onClick={closeDropdown}
              >
                About
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
