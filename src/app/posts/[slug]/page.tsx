import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import ArticleTags from "components/articlestags";
import { MDXComponents } from "mdx/types";
import Image from "next/image";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title, description: post?.desc };
};

const components: MDXComponents = {
  img: (props) => (
    <span className="">
      <Image
        src={`${props.src}`}
        alt={`${props.alt}`}
        width={550}
        height={250}
      ></Image>
    </span>
  ),
};
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  //use useMDXComponent hook instead of getMDXComponent hook
  const Content = useMDXComponent(post!.body.code);

  // console.log(allPosts);
  console.log(generateStaticParams());
  return (
    <article className="py-8 mt-10 mx-auto  max-w-xl ">
      <div className="mb-8 text-center  ">
        <time dateTime={post?.date} className="mb-1 text-xs font-bold">
          {format(parseISO(post!.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-4xl font-bold">{post?.title}</h1>

        <h3 className="m-4 ">
          <ArticleTags tags={post?.tags} />
        </h3>
      </div>

      <Content
        components={components}
        className=" w-full prose   dark:prose-invert  dark:text-slate-100 dark:prose-headings:text-slate-100  "
      />
    </article>
  );
};

export default PostLayout;
