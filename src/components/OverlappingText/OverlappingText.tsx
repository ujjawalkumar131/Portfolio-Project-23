import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

type props = {
  classname?: string;
  toptext: string;
  backgroundtext: string;
  startTime?: number;
  stagger?: number;
};
export default function OverlappingText({
  classname,
  toptext,
  backgroundtext,
  startTime = 150,
  stagger = 600,
}: props) {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  const [hasRun, setHasRun] = useState(false);
  useEffect(() => {
    if (inView && !hasRun) {
      setHasRun(true);
    }
  }, [inView]);
  const fade = useSpring({
    y: hasRun ? 0 : 20,
    opacity: hasRun ? 1 : 0,
    delay: startTime,
  });
  const fadetop = useSpring({
    y: hasRun ? 0 : 20,
    opacity: hasRun ? 1 : 0,
    delay: startTime + stagger,
  });

  return (
    <div
      ref={ref}
      className={
        (classname ? classname : "") +
        "relative my-12 flex items-center justify-center py-12 text-center"
      }
    >
      <animated.div
        style={fadetop}
        className="text-md absolute bottom-12 text-end font-bold sm:bottom-16 sm:text-3xl"
      >
        {toptext}
      </animated.div>
      <animated.div
        style={fade}
        className="align-text-bottom text-5xl font-black uppercase text-stone-600 sm:text-8xl sm:tracking-widest md:text-9xl md:tracking-wide"
      >
        {backgroundtext}
      </animated.div>
    </div>
  );
}
