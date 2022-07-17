import Link from "next/link";
import data from "../../descriptions";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function BlogCard({ path }: { path: string }) {
	const [ref, inView] = useInView({
		threshold: 0.4,
	});
	const fade = useSpring({
		y: inView ? 0 : 20,
		opacity: inView ? 1 : 0,
		delay: 150,
	});
	return (
		<animated.div
			ref={ref}
			style={fade}
			className="h-80 w-max bg-stone-800 py-4 rounded-lg flex flex-col items-center pt-6">
			<Link href={`/Blogs/${path}`}>
				<a className="text-blue-500 font-extrabold text-3xl capitalize w-full border-b-2 border-neutral-700 px-8 pb-2 text-center">
					{path}
				</a>
			</Link>
			<div className="px-8 pt-2 w-64 mx-auto text-center mt-2">
				{data.filter((d) => d.name == path)[0]?.desc ||
					"No description"}
			</div>
		</animated.div>
	);
}
