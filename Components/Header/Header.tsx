import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function Header(){
  const [ref, inView] = useInView({
    threshold: 0.4
  })
  const fade= useSpring({y: inView?0:20, opacity: inView?1:0, delay: 150});
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