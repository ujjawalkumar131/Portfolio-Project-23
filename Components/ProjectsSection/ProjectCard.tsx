import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"
import {useInView} from "react-intersection-observer"
import {animated, useSpring} from "react-spring"

type props = {
  image: StaticImageData,
  title: string,
  content: string,
  github: string,
  projecturl: string,
  reverse?: boolean
}

export default function ProjectCard({image, title, content, github, projecturl, reverse=false}:props){

  const [ref, inView] = useInView({
    threshold: 0.4
  })
  const fadeImage= useSpring({x: inView?0:20, opacity: inView?1:0, delay: 450});
  const fade= useSpring({x: inView?0:20, opacity: inView?1:0, delay: 150});
  return (
    <div ref={ref} className={styles.CardContainer} style={reverse?{flexDirection: "row-reverse"}:{flexDirection: "row"}}>
      <animated.div style={fadeImage} className={styles.imageContainer}>
      <Image src={image} alt="project screenshot"/>
      </animated.div>
      <animated.div style={fade} className={styles.right}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.content}>
          {content}
        </div>
        <div className={styles.links}>
          <div className={styles.github}>
            <Link href={github}>Source</Link>
          </div>
          <div className={styles.projecturl}>
            <Link href={projecturl}>Link</Link>
          </div>
        </div>
      </animated.div>
    </div>
  )
}