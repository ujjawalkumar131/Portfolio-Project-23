import styles from "./styles.module.css"

type props = {
  classname?: string,
  toptext: string,
  backgroundtext: string,
}
export default function OverlappingText({classname, toptext, backgroundtext}: props){
  return <div className={(classname?classname:"") + styles.textcontainer}>
    <div className={styles.toptext}>
      {toptext}
    </div>
    <div className={styles.bottomtext}>
      {backgroundtext}
    </div>
  </div>
}