import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import BlogFilter from "components/blogfilter";

import TwitterPost from "components/twitterpost";
import Icons from "components/icons";
import Typewriter from "components/Typewriter";

function PostTags(post: Post) {
  return (
    <div>
      <h3>
        <Link href={post.url}>{post.tags}</Link>
      </h3>
    </div>
  );
}

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className=" w-2/3 px-5 my-2 py-3 rounded  outline-dashed outline-1 border-gray-200 dark:border-gray-800 bg-stone-100 ">
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
          className="dark:text-stone-900 hover:text-orange-400  outline-dashed outline-1 rounded px-2 py-1 dark:hover:text-orange-400 "
        >
          Read more ➪
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
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

  //console.log(allTagsArray);
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="mt-10 mx-auto grid grid-flow-row  grid-cols-1 laptop:gap-4 laptop:grid-cols-2  place-items-center">
        <div className="laptop:col-span-2 mx-50">
          <h1 className="  dark:text-background  laptop:text-2xl text-xl font-mono  px-50 rounded-xl py-10">
            <Typewriter></Typewriter>
          </h1>
        </div>

        <div>
          <div className="flex  flex-wrap w-fit ">
            <BlogFilter
              tags={arrString}
              className="  items-center justify-center"
            ></BlogFilter>
          </div>
          <div className="flex flex-row space-x-4 py-4"></div>

          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
        <div className=" laptop:w-2/3 laptop:mx-auto ">
          <h1 className="text-xl laptop:text-2xl font-bold py-2 mt-5  text-otherblack dark:text-background ">
            Twitter!
          </h1>
          <TwitterPost></TwitterPost>
          <div className="bg-orange-200 rounded-lg shadow-md outline-dashed outline-1 p-6 w-80">
            <div className="mb-4">
              <div>
                <p className="my-4 font-medium dark:text-black">
                  Feel free to contact me by clicking the buttons below:
                </p>
                <a
                  href={`mailto:${"s.s.1.0.0.4.9.7hubh@gmail.com"}`}
                  className="bg-orange-400 hover:bg-orange-500 my-2 outline-dashed outline-1 font-semibold text-black  py-2 px-4 rounded"
                >
                  Email Me
                </a>
              </div>

              {/* Add more contact details as needed */}
            </div>
            <div className="flex space-x-4 ">
              <Icons></Icons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function tag(value: Post, index: number, array: Post[]): unknown {
  throw new Error("Function not implemented.");
}
function a(a: any, b: any): number {
  throw new Error("Function not implemented.");
}
