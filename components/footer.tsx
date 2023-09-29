import React from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col  justify-center sticky bottom-0 bg-opacity-30 backdrop-filter backdrop-blur-md   py-8 w-screen z-50 border-t-[0.5px] border-orange-100 dark:border-stone-700 ">
      <div className="container mx-auto max-h-10 text-center">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} SemiColonist. All rights reserved.
        </p>
        <p className="mt-2 text-xs ">
          Created by{" "}
          <span className="font-semibold text-orange-500 dark:text-orange-200 pb-2">
            Shubham
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
