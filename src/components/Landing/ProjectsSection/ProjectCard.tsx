import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

type props = {
  image: StaticImageData;
  title: string;
  content: string;
  github: string;
  projecturl: string;
  reverse?: boolean;
  tags: string[];
};

export default function ProjectCard({
  image,
  title,
  content,
  github,
  projecturl,
  reverse = false,
  tags,
}: props) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    setisMobile(window.innerWidth < 768);
    // set listener for window resize
    const t = () => {
      setisMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", t);
    // remove listener on unmount
    return () => {
      window.removeEventListener("resize", t);
    };

  }, []);

  const fadeImage = useSpring({
    x: inView ? 0 : 20,
    opacity: inView ? 1 : 0,
    delay: 450,
  });
  const fade = useSpring({
    x: inView ? 0 : 20,
    opacity: inView ? 1 : 0,
    delay: 150,
  });

  return (
    <div
      ref={ref}
      className={styles.CardContainer}
      style={
        reverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
      }
      onMouseMove={async (e) => {
        if (!isMobile) {
          const rect = e.currentTarget.getBoundingClientRect();
          const w = rect.right - rect.left;
          const h = rect.bottom - rect.top;
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.animate(
            { translate: `${x - w / 2}px ${y - h / 2}px` },
            {
              duration: 400,
              fill: "forwards",
              pseudoElement: "::before",
            }
          );
        } else {
          //nothing
        }
      }
      }
    >
      <animated.div style={fadeImage} className={styles.imageContainer}>
        <Image src={image} alt="project screenshot" />
      </animated.div>
      <animated.div style={fade} className={styles.right}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className={styles.links}>
          <Link href={github} target="_blank">
            <div className={styles.github}>Source</div>
          </Link>
          <Link href={projecturl} target="_blank">
            <div className={styles.projectUrl}>Link</div>
          </Link>
        </div>
      </animated.div>
    </div>
  );
}
