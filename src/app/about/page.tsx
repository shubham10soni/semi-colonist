import { poppins } from "@/utils/fonts";
import React from "react";
import Image from "next/image";
import Icons from "components/icons";
import Back from "components/back";

const about = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 gap-2   h-[26rem] ">
        <div className="flex flex-col gap-2">
          <div
            className={` basis-[5%] ${poppins} laptop:mb-5 mb-2 font-semibold   laptop:text-2xl text-xl   text-zinc-800  dark:text-zinc-100  tracking-normal`}
          >
            Welcome to my corner of the web!
          </div>
          <div className="mb-20  basis-[5%] ">
            I'm Shubham, and I'm here to share a bit about myself.
          </div>
          <div
            className={` basis-[90%] ${poppins} flex items-center  justify-center`}
          >
            <div className="rounded-3xl w-[70%] h-[130%] -rotate-2  dark:hover:shadow-[0_35px_60px_-15px_rgba(100,100,100,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(204,204,204,0.8)] relative overflow-hidden border-1  ">
              <Image
                src="/cp5.jpg"
                alt="Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className={` basis-[75%]  flex items-center justify-center`}>
            <div className="rounded-3xl  laptop:w-[85%] w-[100%] h-[100%] rotate-1  dark:hover:shadow-[0_35px_60px_-15px_rgba(100,100,100,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(204,204,204,0.8)] relative overflow-hidden border-1  ">
              <Image
                src="/cp4.jpg"
                alt="Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            className={` basis-[25%]  ${poppins} pt-20   tracking-wide text-zinc-800  dark:text-zinc-100`}
          >
            By day, I'm an MES Consultant, helping streamline manufacturing
            processes, But when the workday ends, my passion for web development
            takes over.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2  mt-20 text-zinc-800 dark:text-zinc-100 ">
        <div className={` indent-10  basis-[50%] ${poppins} tracking-wide`}>
          But it's not all work—I've got a passion for freezing moments in time
          through photography, finding inspiration in the world around me.
          Music? Oh, it's the soundtrack to my life, keeping me going through it
          all. And when I'm not glued to a screen or a camera, I'm probably off
          exploring new places, soaking up the vibes of different cultures. So
          stick around, get to know me, and let's make some magic happen
          together!
        </div>
        <div className={` mt-8 mb-4 basis-[40%]  ${poppins}  `}>
          <Icons></Icons>
        </div>
        <div className=" basis-[10%] ">
          <Back url="/"></Back>
        </div>
      </div>
    </div>
  );
};

export default about;
