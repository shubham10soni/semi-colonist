import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import BlogFilter from "components/blogfilter";
import Work from "components/work";
import TwitterPost from "components/twitterpost";
import Icons from "components/icons";
import Typewriter from "components/Typewriter";
import Image from "next/image";
import Yoda from "public/yoda.gif";
import { agy, int_er, poppins, wind_song } from "@/utils/fonts";
import Top3 from "components/top3";

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
    <div className=" laptop:w-2/3 px-5 my-2 py-3 rounded    outline-slate-300 dark:border-gray-800 ">
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

  console.log(arrString);
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div>
        <div className=" grid grid-cols-2 gap-4   h-96 mx-50">
          <div className="  flex flex-col gap-2  ">
            <div className="  basis-1/2 flex flex-col  gap-1">
              <div className=" basis-1/4">
                <div
                  className="h-16 w-16 laptop:h-20 laptop:w-20 relative
               rounded-3xl overflow-hidden border-1 
                shadow-xl"
                >
                  <Image
                    src="/pi7.jpg"
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className=" basis-1/4 ">
                <h1
                  className={`${poppins} bg-gradient-to-r from-sky-600 to-emerald-500  dark:bg-gradient-to-r dark:from-sky-200 dark:to-emerald-200  inline-block text-transparent  bg-clip-text font-normal laptop:text-opacity-60 italic laptop:text-sm text-sm mt-2  leading-relaxed text-gray-500  `}
                >
                  MES Consultant, Full Stack Web Developer, Amateur Photographer
                  with a Passion for Music and Travel
                </h1>
              </div>
              <Link
                href={"/about"}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50   hover:rounded-xl"
              >
                <div
                  className={` basis-1/4   ${poppins}  font-medium laptop:text-opacity-85 laptop:text-lg  text-sm mt-2   leading-relaxed text-gray-600  dark:text-gray-200`}
                >
                  I'm Shubham, and I wear a few hats: I help improve
                  manufacturing as an MES Consultant and I build cool stuff on
                  the web as a Full Stack Web Developer.
                </div>
                <div
                  className={`mt-1 text-sm bg-gradient-to-r from-sky-600 to-emerald-500  dark:bg-gradient-to-r  dark:from-sky-200 dark:to-emerald-200  inline-block text-transparent  bg-clip-text`}
                >
                  Know more {">"}
                </div>
              </Link>
              <div className=" basis-1/4 mt-4">
                <Icons></Icons>
              </div>
            </div>
            <div
              className={` basis-1/2 line-clamp-4 ${poppins}  font-normal laptop:text-opacity-85 laptop:text-sm text-sm mt-2  leading-relaxed text-gray-700  dark:text-gray-200`}
            ></div>
          </div>
          <div className=" grid grid-row-2   gap-2">
            <div className=" flex flex-row gap-1">
              <div className="basis-1/2 flex justify-center items-center ">
                <div className="rounded-3xl w-4/5 h-4/5 -rotate-6 dark:hover:shadow-[0_35px_60px_-15px_rgba(100,100,100,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(204,204,204,0.8)]  border-1 relative overflow-hidden  ">
                  <Image
                    src="/cp1.jpg"
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className=" basis-1/2 flex justify-center items-center ">
                <div className="rounded-3xl w-[75%] h-[75%] laptop:h-[120%] rotate-2   dark:hover:shadow-[0_35px_60px_-15px_rgba(100,100,100,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(204,204,204,0.8)]  relative border-1   overflow-hidden">
                  <Image
                    src="/cp3.3.jpg"
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className=" basis-1/2 flex justify-center items-center">
              <div className="rounded-3xl w-3/5 h-[80%] rotate-1  dark:hover:shadow-[0_35px_60px_-15px_rgba(100,100,100,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(204,204,204,0.8)] relative overflow-hidden border-1  ">
                <Image
                  src="/cp2.jpg"
                  alt="Avatar"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 laptop:flex laptop:flex-col-2  justify-between">
          <div className=" basis-[40%] w-full">
            <Top3></Top3>
          </div>
          <div className=" flex flex-col gap-10 basis-[40%]">
            <Work></Work>
          </div>
        </div>
      </div>
      {/* <div>
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
          <h1 className="text-xl laptop:text-2xl font-bold laptop:mt-2 mt-5 text-otherblack dark:text-background ">
            Twitter!
          </h1>
          <TwitterPost></TwitterPost>
          <div className="bg-orange-200 rounded-lg shadow-md outline-dashed outline-1 py-3 px-5 w-80">
            <div className="mb-4">
              <div>
                <p className="my-4 font-medium dark:text-black"></p>
                <div className="font-semibold normal mb-5  text-lg dark:text-black">
                  <Image src={Yoda} alt={""}></Image>
                </div>
                <div className=" flex flex-row  items-center justify-center ">
                  <div className="mt-1 ">
                    <Icons></Icons>
                  </div>
                </div>
              </div>

              {/* Add more contact details as needed 
            </div>
          </div>
        </div> 
      */}
    </>
  );
}
function tag(value: Post, index: number, array: Post[]): unknown {
  throw new Error("Function not implemented.");
}
function a(a: any, b: any): number {
  throw new Error("Function not implemented.");
}
