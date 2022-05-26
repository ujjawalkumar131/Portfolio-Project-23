import Connect from "../Connect/Connect"
import OverlappingText from "../OverlappingText/OverlappingText"
import styles from "./styles.module.css"

export default function Footer(){
  return (
  <div className={styles.FooterContainer}>
    <div className="connect">
      <OverlappingText backgroundtext="Connect" toptext="Wanna Reach Out?" />
    </div>
    <Connect/>
    © 2022 Lohitaksha Malhotra
  </div>
  )
}