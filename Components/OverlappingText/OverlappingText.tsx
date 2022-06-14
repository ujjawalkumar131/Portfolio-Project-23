import styles from "./styles.module.css"
import {useInView} from "react-intersection-observer"
import {animated, useSpring} from "react-spring"

type props = {
  classname?: string,
  toptext: string,
  backgroundtext: string,
}
export default function OverlappingText({classname, toptext, backgroundtext}: props){

  const [ref, inView] = useInView({
    threshold: 0.4
  })
  const fade= useSpring({y: inView?0:20, opacity: inView?1:0, delay: 150});
  const fadetop= useSpring({y: inView?0:20, opacity: inView?1:0, delay: 750});

  return <div ref={ref} className={(classname?classname:"") + styles.textcontainer}>
    <animated.div style={fadetop} className={styles.toptext}>
      {toptext}
    </animated.div>
    <animated.div style={fade} className={styles.bottomtext}>
      {backgroundtext}
    </animated.div>
  </div>
}