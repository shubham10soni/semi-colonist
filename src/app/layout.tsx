import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import Header from "components/header";
import Footer from "components/footer";
import { Analytics } from "@vercel/analytics/react";
import Providers from "components/provider";
import Dropdown from "components/dropdown";

export const metadata: Metadata = {
  title: "semiColonised",
  description: "Colonised by Semicolon;",
};

const header = (
  <header>
    <div>
      <Link href={"/"}>
        <h1 className="text-3xl px-2 my-2 flex flex-col justify-between items-center text-slate-100 ">
          semiColonised
        </h1>
      </Link>
      <p className="text-otherblack text-xm px-2">
        <h1 className=""> Welcome to tech, subtly redefined.</h1>
      </p>
      <br />
    </div>
  </header>
);

const footer = (
  <footer>
    <div>
      <br />
      <h3 className="text-slate-500 py-20">Created with 🤍 by Shubham</h3>
    </div>
  </footer>
);
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className=" flex h-full flex-col bg-zinc-50  dark:bg-black">
        <Providers>
          <div className=" w-full  ">
            <div className="fixed inset-0 flex justify-center    ">
              <div className="   w-full  max-w-7xl ">
                <div className="w-full h-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col min-h-screen">
              <Header></Header>
              <div className=" flex-grow mb-5  pt-10 ml-5 mr-5 tracking-normal  laptop:mx-28 laptop:mb-28 laptop:mt-[3rem]">
                {children}
              </div>

              <Footer></Footer>
            </div>
          </div>
        </Providers>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
