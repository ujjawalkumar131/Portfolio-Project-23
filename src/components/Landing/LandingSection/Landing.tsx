import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import Connect from "@/components/Connect/Connect";

const Landing = () => {
	const [ref, inView] = useInView({
		threshold: 0.2,
	});
	const fade = useSpring({
		x: inView ? 0 : 20,
		opacity: inView ? 1 : 0,
		delay: 100,
	});
	return (
		<animated.div
			style={fade}
			className="text-3xl px-12 sm:text-6xl md:text-7xl font-extrabold my-48 mx-auto text-center flex flex-col"
			ref={ref}>
			Hello there, I&apos;m <div className="blue"> Lohitaksha Malhotra,</div>{" "}
			Full stack developer and student at <div className="blue">BIT Mesra</div>
			<Connect />
		</animated.div>
	);
};
export default Landing;
