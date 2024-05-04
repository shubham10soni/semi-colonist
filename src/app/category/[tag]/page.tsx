import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { poppins } from "@/utils/fonts";
import ArticleTags from "components/articlestags";
import Back from "components/back";

export const generateMetadata = ({ params }: { params: { tag: string } }) => {
  const post = allPosts.find((post) => post.tags.includes(params.tag));
  return {
    title: `semiColonised | ${params.tag}`,
    description: `Posts related to ${params.tag}`,
  };
};

export async function generateStaticParams() {
  //getting all tags from all post , and storing it in a set
  const allTagSet = allPosts.reduce((acc: any, post: any) => {
    return acc.add(post.tags);
  }, new Set([]));

  //converting a set into an array , also sorting it alphabettically
  console.log(allPosts);
  const allTagsArray = [...allTagSet].sort((a, b) => a.localeCompare(b));
  //adding the default 'All' option
  //allTagsArray.unshift("All");
  //converting array to string
  const arrString = allTagsArray.toLocaleString();

  const duplicateArr = arrString.split(",");

  //removing duplicates from array
  const withoutDuplicates = duplicateArr?.filter(
    (value: any, index: any, array: string | any[]) =>
      array.indexOf(value) === index
  );

  const finalTags = withoutDuplicates?.map((t: any) => t.trim());
  console.log(finalTags);
  //---------------------------------------------This will be creating static pages with dynamic routes
  return finalTags.map((t) => ({ tag: t }));
}

export default function TagFilter({ params }: { params: { tag: string } }) {
  const posts = allPosts.filter((post) => post.tags.includes(params.tag));
  const sortedposts = posts?.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  {
    console.log(generateStaticParams());
  }
  return (
    <div className=" mb-10 flex flex-col gap-5  ">
      <div className="  flex flex-row  items-center">
        <h1
          className={`text-base  py-2 ${poppins} mb-5  mx-2 text-zinc-800 dark:text-zinc-100   font-medium `}
        >
          Blogs with tag:
        </h1>
        <h1
          className={` ${poppins} relative mb-5  max-w-fit  ml-2 rounded px-3 py-2 mt-1 text-xs  font-medium text-stone-900  ring-1 ring-zinc-200   shadow-zinc-200/70 dark:shadow-zinc-700/70 dark:ring-zinc-700 dark:text-zinc-100`}
        >
          {`# ${params.tag}`}
        </h1>
      </div>
      <div className="flex flex-row "></div>
      {sortedposts.map((post, idx) => (
        <div key={idx} className="laptop:w-[40%] ">
          <Link href={post.url}>
            <div className="   flex flex-col gap-4  h-70  p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50   hover:transition  hover:ease-in-out  hover:delay-75 hover:duration-150 ring-1 ring-zinc-100 dark:ring-zinc-800 dark:bg-zinc-900  ">
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
        </div>
      ))}
      <div className="  ">
        <Back url="/articles"></Back>
      </div>
    </div>
  );
}
function tag(value: Post, index: number, array: Post[]): unknown {
  throw new Error("Function not implemented.");
}
function a(a: any, b: any): number {
  throw new Error("Function not implemented.");
}
