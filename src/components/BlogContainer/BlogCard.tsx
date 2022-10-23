import Link from "next/link";
import data from "../../descriptions";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

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
      className="flex h-80 w-max flex-col items-center rounded-lg bg-stone-800 py-4 pt-6"
    >
      <Link href={`/Blogs/${path}`}>
        <a className="w-full border-b-2 border-neutral-700 px-8 pb-2 text-center text-3xl font-extrabold capitalize text-blue-500">
          {path}
        </a>
      </Link>
      <div className="mx-auto mt-2 w-64 px-8 pt-2 text-center">
        {data.filter((d) => d.name == path)[0]?.desc || "No description"}
      </div>
    </animated.div>
  );
}
