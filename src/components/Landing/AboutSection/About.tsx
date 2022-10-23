import OverlappingText from "@/components/OverlappingText/OverlappingText";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fade = useSpring({
    y: inView ? 0 : 20,
    opacity: inView ? 1 : 0,
    delay: 400,
  });

  return (
    <div className="m-12 mb-12 sm:m-24" ref={ref}>
      <OverlappingText
        backgroundtext="About me"
        toptext="A bit more about me"
      />
      <animated.div className="text-3xl font-bold" style={fade}>
        I am Lohitaksha Malhotra, I am currently in my 3<sup>rd</sup> year
        persuing <div className="blue inline">Mechanical Engineering</div> at
        BIT Mesra. My interests lie in{" "}
        <div className="blue inline">
          programming, web development and problem solving
        </div>
        . I use MacOS, and have used Linux ({" "}
        <div className="blue inline">Arch</div> btw ) as my main OS. I am also a{" "}
        <div className="blue inline">Weeb</div> and a{" "}
        <div className="blue inline">Gamer</div>.
      </animated.div>
    </div>
  );
}
