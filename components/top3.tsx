import React from "react";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import ArticleTags from "./articlestags";
import { poppins } from "@/utils/fonts";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  {
    /* <div className=" laptop:w-2/3 px-5 my-2 py-3 rounded   outline-transparent outline-slate-300 dark:border-gray-800 ">
      <div className="flex justify-between items-center">
        <span className=" text-gray-600 font-light">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </span>
      </div>
      <div className="">
        <p className=" text-gray-900 font-bold text-xl">{post.title}</p>
      </div>
      <div className="">
        <p className=" text-gray-600">{post.desc}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <Link
          href={post.url}
          className="dark:text-stone-900 hover:text-orange-400   outline-dashed outline-1 rounded px-2 py-1 dark:hover:text-orange-400 "
        >
          Read more ➪
        </Link>
      </div>
  </div>*/
  }
  return (
    <Link href={post.url}>
      <div className="   flex flex-col gap-4  h-70 mt-8 p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50   hover:transition  hover:ease-in-out  hover:delay-75 hover:duration-150 ring-1 ring-zinc-100 dark:ring-zinc-800 dark:bg-zinc-900  ">
        <div
          className={` basis-6 flex flex-row justify-end ${poppins}  font-light text-xs tracking-wider dark:text-zinc-400 text-zinc-400`}
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </div>
        <div
          className={` ${poppins} text-lg  font-medium  basis-12 text-zinc-800 dark:text-zinc-50`}
        >
          {post.title}
        </div>
        <div className={` ${poppins} text-sm tracking-wide   `}>
          <div className="flex  flex-wrap w-fit gap-2 ">
            <ArticleTags tags={post?.tags} />
          </div>
        </div>
        <div
          className={` ${poppins} text-sm basis-1/2 leading-relaxed text-zinc-600 laptop:line-clamp-3 line-clamp-2 dark:text-zinc-200`}
        >
          {post.desc}
        </div>
        <div
          className={`flex flex-row gap-2 ${poppins}   text-sm font-light text-zinc-500 dark:text-zinc-300`}
        >
          <div>Read more </div>
          <div className=" text-base">☛</div>
        </div>
      </div>
    </Link>
  );
}
const top3 = () => {
  //getting all tags from all post , and storing it in a set
  const allTagSet = allPosts.reduce((acc: any, post: any) => {
    return acc.add(post.tags);
  }, new Set([]));

  //converting a set into an array , also sorting it alphabettically

  const allTagsArray = [...allTagSet].sort((a, b) => a.localeCompare(b));
  //adding the default 'All' option
  //allTagsArray.unshift("All");
  //converting array to string
  const arrString = allTagsArray.toLocaleString();

  console.log(arrString);
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  if (posts.length > 3) {
    const top3 = posts.slice(0, 3);
    return top3.map((post, idx) => <PostCard key={idx} {...post} />);
  } else {
    return posts.map((post, idx) => <PostCard key={idx} {...post} />);
  }
};

export default top3;
