import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const baseUrl = "http://localhost:3000";

  // Get All Posts

  const postsUrls =
    allPosts?.map((post) => {
      return {
        url: `${baseUrl}/posts/${post._raw.flattenedPath}`,
        lastModified: `${post.date}`,
      };
    }) ?? [];

  // Get All Categories

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
  const categoriesUrls =
    finalTags.map((t) => {
      return {
        url: `${baseUrl}/category/${t}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
    ...categoriesUrls,
  ];
}
