import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import Header from "components/header";
import Footer from "components/footer";

import Providers from "components/provider";

export const metadata: Metadata = {
  title: "semiColon-ist",
  description: "Colonised by Semicolon;",
};

const header = (
  <header>
    <div>
      <Link href={"/"}>
        <h1 className="text-3xl px-2 my-2 flex flex-col justify-between items-center text-slate-100 ">
          semiColon-ist
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
      <body className=" flex flex-col justify-between h-screen  bg-stone-200 dark:bg-stone-900">
        <Providers>
          <Header></Header>
          <div className=" mb-5  mt-10 ml-5 mr-5">{children}</div>

          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
