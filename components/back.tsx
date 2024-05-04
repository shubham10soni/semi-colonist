import Link from "next/link";
import React from "react";

const Back = ({ url }: any) => {
  return (
    <div className="">
      <Link href={url}>
        <div className="  absolute flex items-center justify-center p-px  ml-2 mt-2 will-change-transform overflow-hidden bg-gradient-to-b from-sky-600  to-emerald-600 dark:from-emerald-400 dark:to-pink-400 rounded-xl  z-0  ">
          <div className="    absolute animate-spinslow bg-gradient-to-r  from-transparent    via-white/90 to-transparent  -top-10 -bottom-10 left-2 right-2  z-10"></div>
          <div className="   relative flex justify-center items-center w-10 h-9  laptop:w-12 laptop:h-9 rounded-xl dark:bg-zinc-800 bg-zinc-50 hover:dark:bg-zinc-900 hover:bg-white   text-zinc-800 dark:text-zinc-100 z-20 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="-130 -920 890 890"
              width="24"
              className="fill-zinc-800 dark:fill-zinc-50"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Back;
