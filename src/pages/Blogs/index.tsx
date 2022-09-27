import OverlappingText from "@/components/OverlappingText/OverlappingText";
import { GetStaticProps } from "next";
import BlogCard from "@/components/BlogContainer/BlogCard";

export default function AllBlogs({ paths }: { paths: string[] }) {
	return (
		<div className="flex flex-col sm:mx-16 mx-8">
			<OverlappingText
				backgroundtext="Blogs"
				toptext="See what i've been writing"
			/>
			<div className="flex justify-center flex-row flex-wrap gap-4 m-8">
				{paths.map((path) => {
					return <BlogCard path={path} key={path} />;
				})}
			</div>
		</div>
	);
}
export const getStaticProps: GetStaticProps = async () => {
	const fs = require("fs");
	const files = fs.readdirSync("./src/pages/Blogs/");
	return {
		props: {
			paths: files
				.filter((f: string) => f != "index.tsx")
				.map((f: string) => f.replace(".mdx", "")),
		},
	};
};
