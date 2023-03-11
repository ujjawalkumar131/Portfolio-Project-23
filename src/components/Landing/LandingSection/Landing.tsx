import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import Connect from "@/components/Connect/Connect";

const Landing = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fade = useSpring({
    x: inView ? 0 : 20,
    opacity: inView ? 1 : 0,
    delay: 100,
  });
  return (
    <animated.div
      style={fade}
      className="my-48 mx-auto flex flex-col px-12 text-center text-3xl font-extrabold sm:text-6xl md:text-7xl"
      ref={ref}
    >
      Hello there, I&apos;m <div className="blue"> Ujjawal Kumar</div>{" "}
          Programmer , Web developer and student at <div className="blue">BIT Mesra,Ranchi</div>
      <Connect />
    </animated.div>
  );
};
export default Landing;
