import Link from "next/link";
import data from "../../descriptions";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function BlogCard({ path }: { path: string }) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
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
      className="flex min-h-[15rem] w-9/12 flex-col items-center rounded-lg border bg-black py-4 pt-6"
    >
      <Link href={`/Blogs/${path}`}>
        <a className="w-full border-b px-8 pb-2 text-center text-3xl font-extrabold capitalize text-blue-500">
          {data.filter((d) => d.id == path)[0]?.title || path} →
        </a>
      </Link>
      <div className="mx-auto mt-2 flex w-full flex-1 items-center px-8 pt-2 text-center text-lg">
        {data.filter((d) => d.id == path)[0]?.desc || "No description"}
      </div>
    </animated.div>
  );
}
