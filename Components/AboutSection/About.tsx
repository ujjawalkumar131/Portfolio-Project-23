import OverlappingText from "../OverlappingText/OverlappingText";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function About() {
	const [ref, inView] = useInView({
		threshold: 0.1,
	});
	const fade = useSpring({
		y: inView ? 0 : 20,
		opacity: inView ? 1 : 0,
		delay: 400,
	});

	return (
		<div className="m-12 sm:m-24 mb-12" ref={ref}>
			<OverlappingText
				backgroundtext="About me"
				toptext="A bit more about me"
			/>
			<animated.div className="font-bold text-3xl" style={fade}>
				I am Lohitaksha Malhotra, I am currently in my 3<sup>rd</sup>{" "}
				year persuing{" "}
				<div className="inline blue">Mechanical Engineering</div> at BIT
				Mesra. My interests lie in{" "}
				<div className="inline blue">
					programming, web development and problem solving
				</div>
				. I use Macos, and have used Linux ({" "}
				<div className="inline blue">Arch</div> btw ) as my main OS. I
				am also a <div className="inline blue">Weeb</div> and a{" "}
				<div className="inline blue">Gamer</div>.
			</animated.div>
		</div>
	);
}
