import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export const generateMetadata = ({ params }: { params: { tag: string } }) => {
  const post = allPosts.find((post) => post.tags.includes(params.tag));
  return {
    title: `semiColon-ist | ${params.tag}`,
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
    <div className=" mt-10 mx-auto  ">
      <div className=" py-2 flex flex-row  items-center">
        <h1 className="text-xl py-2  mx-2 font-bold">Blogs with Tag:</h1>
        <h1
          className=" rounded bg-orange-400 dark:bg-orange-400 px-2 py-1 mt-1 text-medium font-bold text-stone-900 
         outline-dashed outline-1 dark:outline-stone-100"
        >
          {`# ${params.tag}`}
        </h1>
      </div>
      <div className="flex flex-row space-x-4"></div>
      {sortedposts.map((post, idx) => (
        <div
          key={idx}
          className=" laptop:w-1/3  px-5 my-2 py-3 rounded  outline-dashed outline-1 border-gray-200 dark:border-gray-800 bg-stone-100"
        >
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
              className="dark:text-stone-900 hover:text-orange-400 outline-dashed outline-1 rounded px-2 py-1 dark:hover:text-orange-400 "
            >
              Read more ➪
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
function tag(value: Post, index: number, array: Post[]): unknown {
  throw new Error("Function not implemented.");
}
function a(a: any, b: any): number {
  throw new Error("Function not implemented.");
}
