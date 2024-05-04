import { poppins } from "@/utils/fonts";
import React from "react";

export default function ArticleTags(tags: any) {
  if (tags?.length === 0) {
    return null;
  }

  tags = tags.tags.split(",").map((t: any) => t.trim());

  console.log(tags);

  return (
    <>
      {tags.map((tag: any, i: any) => (
        <div
          key={i}
          className={` ${poppins} relative  max-w-fit  ml-2 rounded px-3 py-2 mt-2 text-xs  font-medium text-stone-900  ring-1 ring-emerald-50 dark:ring-emerald-100 bg-gradient-to-r from-sky-200 to-emerald-200`}
        >
          {`# ${tag}`}
        </div>
      ))}
    </>
  );
}
