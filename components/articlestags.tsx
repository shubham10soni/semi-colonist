import React from "react";

export default function ArticleTags(tags: any) {
  if (tags?.length === 0) {
    return null;
  }

  tags = tags.tags.split(",").map((t: any) => t.trim());

  console.log(tags);

  return tags.map((tag: any, i: any) => (
    <span
      key={i}
      className="ml-2 rounded bg-orange-400 px-3 py-2 mt-2 text-medium font-bold text-stone-900  outline-dashed outline-1  dark:outline-stone-100"
    >
      # {tag}
    </span>
  ));
}
