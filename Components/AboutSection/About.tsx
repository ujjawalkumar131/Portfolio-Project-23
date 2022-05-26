import OverlappingText from '../OverlappingText/OverlappingText'
import styles from "./styles.module.css"
import {useInView} from "react-intersection-observer"
import {animated, useSpring} from "react-spring"


export default function About(){
  const [ref, inView] = useInView({
    threshold: 0.1
  })
  const fade= useSpring({y: inView?0:20, opacity: inView?1:0, delay: 400});

  return (
  <div className={styles.About} ref={ref}>
  <OverlappingText backgroundtext='About me' toptext='A bit more about me'/>
  <animated.div className="AboutText" style={fade}>
    I am Lohitaksha Malhotra, I am currently in my 3<sup>rd</sup> year persuing <div className="blue">Mechanical Engineering</div> at BIT Mesra.
    My interests lie in <div className="blue">programming, web development and problem solving</div>. I am also interested in Linux (I use <div className="blue">Arch</div> btw)
    and I am also a weeb.
  </animated.div>
  </div>
  )


}