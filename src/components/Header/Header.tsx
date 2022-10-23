import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function Header(){
  const [ref, inView] = useInView({
    threshold: 0.4
  })

  const [hasRun, setHasRun] = useState(false);
  useEffect(() => {
    if (inView && !hasRun) {
      setHasRun(true);
    }
  }, [inView]);

  const fade= useSpring({y: hasRun?0:20, opacity: hasRun?1:0, delay: 150});
  return (
    <animated.div ref={ref} style={fade} className="flex flex-row bg-black border-neutral-700 border-2 m-4 p-8 rounded-lg justify-between">
      <div className="logo font-black text-xl hover:underline blue">
        <Link href="/"> Lohit </Link>
      </div>
        <div className="headerItem w-max flex flex-row justify-end font-bold hover:underline">
          <Link href="/Blogs"> Blogs </Link>
        </div>
    </animated.div>
  )
}
