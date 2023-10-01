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
      className={`w-fit mt-2 ml-2 rounded hover:bg-orange-200 
  
     bg-orange-400
    
     outline-dashed
      hover:outline-dashed outline-1
      hover:outline-stone-900
      px-3 py-1  text-[15px] font-bold text-stone-900 dark:outline-stone-100 dark:bg-orange-400  dark:hover:bg-orange-300`}
    >
      {`# ${tag}`}
    </Link>
  ));
}
