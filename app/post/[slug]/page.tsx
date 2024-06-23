import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => {
    slug: post.slug;
  });
};

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: string;
}) {
  const id = params?.slug ? " . " + params?.slug : "";
  return {
    title: `Junghoon Blog ${id.replace("_", " ")}`,
  };
}

const page = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default page;
