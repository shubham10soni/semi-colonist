import { poppins } from "@/utils/fonts";
import ArticleTags from "components/articlestags";
import Back from "components/back";
import BlogFilter from "components/blogfilter";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import React from "react";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <Link href={post.url}>
      <div className="   flex flex-col gap-4  h-70 mt-8 p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50   hover:transition  hover:ease-in-out  hover:delay-75 hover:duration-150 ring-1 ring-zinc-100 dark:ring-zinc-800 dark:bg-zinc-900  ">
        <div
          className={` basis-6 flex flex-row justify-end ${poppins}  font-light text-xs tracking-wider dark:text-zinc-400 text-zinc-400`}
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </div>
        <div
          className={` ${poppins} text-lg  font-medium basis-12 text-zinc-800 dark:text-zinc-50`}
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

const articles = () => {
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
  return (
    <div className="mb-8">
      <div className=" flex flex-col gap-5 ">
        <div
          className={`${poppins} basis-[10%] laptop:text-2xl text-xl font-semibold  text-zinc-800  dark:text-zinc-100  tracking-normal `}
        >
          Tech Journey Archives
        </div>
        <div
          className={`${poppins} basis-[10%] dark:text-zinc-100 text-zinc-800`}
        >
          Explore a curated collection of articles documenting my journey
          through various technologies.
        </div>
        <div className={`${poppins} basis-[10%]  `}>
          <div className="flex  flex-wrap w-fit ">
            <BlogFilter
              tags={arrString}
              className="  items-center justify-center"
            ></BlogFilter>
          </div>
        </div>
        <div className={`${poppins} basis-[60%] laptop:w-[40%]`}>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>

        <div className=" basis-[10%] ">
          <Back url="/"></Back>
        </div>
      </div>
    </div>
  );
};

export default articles;
