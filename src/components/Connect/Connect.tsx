import styles from "./connect.module.css";
import Image from "next/image";
import Link from "next/link";
import linkedin from "public/images/linkedin.png";
import github from "public/images/github.png";
import email from "public/images/email.png";
import { animated, useSpring } from "react-spring";

const Connect = () => {
	const connectItemStyles =
		"styles.connectItem relative h-8 w-8 sm:h-12 sm:w-12 rounded-full shadow-lg mx-2 bg-black cursor-pointer";
	const fade = useSpring({
		to: { opacity: 1, x: 0 },
		from: { opacity: 0, x: 20 },
		delay: 600,
	});
	return (
		<div className={styles.connect}>
			<animated.div style={fade} className={connectItemStyles}>
				<Link
					href="https://www.linkedin.com/in/lohitaksha-malhotra-b84392201/"
					passHref>
					<Image src={linkedin} alt="linkedin" layout="fill" />
				</Link>
			</animated.div>
			<animated.div style={fade} className={connectItemStyles}>
				<Link href="https://github.com/Lohit244" passHref>
					<Image src={github} alt="github" layout="fill" />
				</Link>
			</animated.div>
			<animated.div style={fade} className={connectItemStyles}>
				<Link href="mailto:lohit244@gmail.com" passHref>
					<Image src={email} alt="email" layout="fill" />
				</Link>
			</animated.div>
			<animated.div style={fade}>
				<Link href="/Resume.pdf" passHref>
					<div className="text-2xl px-4 py-1 bg-white text-black rounded-lg font-bold cursor-pointer">
						Resume
					</div>
				</Link>
			</animated.div>
		</div>
	);
};
export default Connect;
