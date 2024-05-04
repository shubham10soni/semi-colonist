import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import ArticleTags from "components/articlestags";
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import { poppins } from "@/utils/fonts";

import Back from "components/back";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title, description: post?.desc };
};

const components: MDXComponents = {
  img: (props) => (
    <span className="flex items-center justify-center mx-auto ">
      <Image
        src={`${props.src}`}
        alt={`${props.alt}`}
        width={550}
        height={250}
        className=" rounded-xl"
      ></Image>
    </span>
  ),
};
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  //use useMDXComponent hook instead of getMDXComponent hook
  const Content = useMDXComponent(post!.body.code);

  // console.log(allPosts);
  //console.log(generateStaticParams());
  return (
    <article className="  mx-auto  max-w-3xl  ">
      <div className="mb-14  ">
        <div className=" text-center">
          <time
            dateTime={post?.date}
            className="mb-1 text-xs  text-zinc-500 font-light"
          >
            {format(parseISO(post!.date), "LLLL d, yyyy")}
          </time>
          <h1
            className={`laptop:text-4xl text-2xl  font-semibold dark:text-zinc-100 ${poppins}`}
          >
            {post?.title}
          </h1>

          <h3 className="m-4 ">
            <div className="flex  flex-wrap w-fit  items-center justify-center mx-auto ">
              <ArticleTags tags={post?.tags} />
            </div>
          </h3>
          <h3 className="m-4 ">
            <div
              className={`flex  flex-wrap w-fit  text-base  text-zinc-600 dark:text-zinc-400 items-center italic justify-center mx-auto ${poppins} `}
            >
              {post?.desc}
            </div>
          </h3>
        </div>
        <div className="   ">
          <Content
            components={components}
            className={` prose dark:prose-invert  `}
          />
        </div>
        <div className="mt-5 ">
          <Back url="/articles"></Back>
        </div>
      </div>
    </article>
  );
};

export default PostLayout;
