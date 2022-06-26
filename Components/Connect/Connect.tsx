import styles from "./styles.module.css"
import Image from "next/image"
import Link from "next/link"
import linkedin from "../../public/images/linkedin.png"
import github from "../../public/images/github.png"
import email from "../../public/images/email.png"
import { animated, useSpring } from "react-spring"

const Connect = ()=>{
  const fade= useSpring({to: {opacity: 1, x:0} ,from: {opacity: 0, x: 20}, delay: 600})
  return (
  <div className={styles.connect} >
    <animated.div style={fade} className={styles.connectItem} >
      <Link href="https://www.linkedin.com/in/lohitaksha-malhotra-b84392201/" passHref>
      <Image src={linkedin} alt="linkedin" layout="fill"/>
      </Link>
    </animated.div>
    <animated.div style={fade} className={styles.connectItem}>
      <Link href="https://github.com/Lohit244" passHref>
      <Image src={github} alt="github" layout="fill"/>
      </Link>
    </animated.div>
    <animated.div style={fade} className={styles.connectItem}>
      <Link href="mailto:lohit244@gmail.com" passHref>
      <Image src={email} alt="email" layout="fill"/>
      </Link>
    </animated.div>
    <animated.div style={fade}>
      <Link href="/Resume.pdf " passHref>
        <div className={styles.res}>Resume</div>
      </Link>
    </animated.div>
  </div>
  )
}
export default Connect