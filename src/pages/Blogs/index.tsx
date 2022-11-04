import OverlappingText from "@/components/OverlappingText/OverlappingText";
import { GetStaticProps } from "next";
import BlogCard from "@/components/BlogContainer/BlogCard";
import Head from "next/head";
import data from "@/descriptions";

export default function AllBlogs({ paths }: { paths: string[] }) {
  return (
    <>
      <Head>
        <title>Lohitaksha | Blogs</title>
        <meta
          name="description"
          content="Lohitaksha Malhotra's portfolio website"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/favicon-512x512.png"
        />
      </Head>
      <div className="mx-8 flex flex-col sm:mx-16">
        <OverlappingText
          backgroundtext="Blogs"
          toptext="See what i've been writing"
        />
        <div className="m-8 flex flex-col items-center gap-4">
          {paths.map((path) => {
            return <BlogCard path={path} key={path} />;
          })}
        </div>
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const fs = require("fs");
  const files = fs.readdirSync("./src/pages/Blogs/");
  return {
    props: {
      paths: files
        .filter((f: string) => f != "index.tsx")
        .map((f: string) => f.replace(".mdx", ""))
        .sort((a: string, b: string) => {
          const fb = data.find((f) => f.id == b);
          const fa = data.find((f) => f.id == a);
          if (!fb || !fa) return 0;
          return fb.index - fa.index;
        }),
    },
  };
};
