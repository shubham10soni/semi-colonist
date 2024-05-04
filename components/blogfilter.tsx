import { poppins } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

export default function BlogFilter(tags: any) {
  if (tags?.length === 0) {
    return null;
  }
  //spliting the string , also converting the string into an array.
  const duplicateArr = tags?.tags.split(",");
  // console.log(duplicateArr);
  //removing duplicates from array
  const withoutDuplicates = duplicateArr?.filter(
    (value: any, index: any, array: string | any[]) =>
      array.indexOf(value) === index
  );

  tags = withoutDuplicates?.map((t: any) => t.trim());
  console.log("this one");
  console.log(tags);

  return tags?.map((tag: any) => (
    <Link
      key={tag}
      href={`category/${tag}`}
      className={` ${poppins} relative  max-w-fit  ml-2 rounded px-3 py-2 mt-2 text-xs  font-medium text-stone-900  ring-1 ring-zinc-200     dark:ring-zinc-700 dark:text-zinc-100`}
    >
      {`# ${tag}`}
    </Link>
  ));
}
