
import { animated, useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Connect from '../Connect/Connect'
import styles from "../../styles/home.module.css"

const Landing = ()=>{
  const fade= useSpring({to: {opacity: 1, x:0} ,from: {opacity: 0, x: 20}, delay: 200})
  return(
      <animated.div style={fade} className={styles.landing}>
        Hello there, I&apos;m <div className="blue"> Lohitaksha Malhotra,</div> Full stack developer and student at <div className="blue">BIT Mesra</div>
        <Connect/>
      </animated.div>
  )

}
export default Landing