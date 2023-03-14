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
          href="https://www.linkedin.com/in/ujjawal-kumar-7a6ba2226"
          target="_blank" passHref>
          <Image src={linkedin} alt="linkedin" />
        </Link>
      </animated.div>
      <animated.div style={fade} className={connectItemStyles}>
        <Link href="https://github.com/ujjawalkumar131" target="_blank" passHref>
          <Image src={github} alt="github" />
        </Link>
      </animated.div>
      <animated.div style={fade} className={connectItemStyles}>
        <Link href="mailto:Ujjawalraj131@gmail.com" target="_blank" passHref>
          <Image src={email} alt="email" />
        </Link>
      </animated.div>
      <animated.div style={fade}>
        <Link href="\Ujjawalkumar.pdf" target="_blank" passHref>
          <div className="text-2xl px-4 py-1 bg-white text-black rounded-lg font-bold cursor-pointer">
            Click here for Resume
          </div>
        </Link>
      </animated.div>
    </div>
  );
};
export default Connect;
