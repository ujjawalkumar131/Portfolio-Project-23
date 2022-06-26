import {useInView} from "react-intersection-observer"
import {animated, useSpring} from "react-spring"

type props = {
  classname?: string,
  toptext: string,
  backgroundtext: string,
}
export default function OverlappingText({classname, toptext, backgroundtext}: props){

  const [ref, inView] = useInView({
    threshold: 0.4
  })
  const fade= useSpring({y: inView?0:20, opacity: inView?1:0, delay: 150});
  const fadetop= useSpring({y: inView?0:20, opacity: inView?1:0, delay: 750});

  return <div ref={ref} className={(classname?classname:"") + "relative flex items-center justify-center text-center py-12 my-12"}>
    <animated.div style={fadetop} className="text-end absolute font-bold text-md sm:text-3xl bottom-12 sm:bottom-16">
      {toptext}
    </animated.div>
    <animated.div style={fade} className="text-slate-700 font-black uppercase text-5xl sm:text-8xl align-text-bottom tracking-widest">
      {backgroundtext}
    </animated.div>
  </div>
}