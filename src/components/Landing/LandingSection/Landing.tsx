import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import Connect from "@/components/Connect/Connect";
import { useEffect, useState } from "react";

const Landing = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const [hasRun, setHasRun] = useState(false);
  useEffect(() => {
    if (inView && !hasRun) {
      setHasRun(true);
    }
  }, [inView]);

  const fade = useSpring({
    x: hasRun ? 0 : 20,
    opacity: hasRun ? 1 : 0,
    delay: 100,
  });
  return (
    <animated.div
      style={fade}
      className="my-48 mx-auto flex flex-col px-12 text-center text-3xl font-extrabold sm:text-6xl md:text-7xl"
      ref={ref}
    >
      Hello there, I&apos;m <div className="blue"> Lohitaksha Malhotra,</div>{" "}
      Full stack developer and student at <div className="blue">BIT Mesra</div>
      <Connect />
    </animated.div>
  );
};
export default Landing;
