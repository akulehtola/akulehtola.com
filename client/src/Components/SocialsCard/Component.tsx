import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './component.module.css'


export default function SocialsCard() {
    return (
        <>
        <div className={styles.card}>
            <button className={styles.contact} onClick={() => {window.open("mailto:me@akulehtola.com")}}>Contact me&nbsp;<FontAwesomeIcon icon={faEnvelope} /></button>
            <button className={styles.socials} onClick={() => {window.open("https://github.com/akulehtola")}}><FontAwesomeIcon icon={faGithub} /></button>
            <button className={styles.socials} onClick={() => {window.open("https://linkedin.com/in/aku-lehtola")}}><FontAwesomeIcon icon={faLinkedin} /></button>
        </div>
        </>
    )
}