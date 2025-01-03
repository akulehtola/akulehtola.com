import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.css'


export default function SocialsCard() {
    return (
        <>
        <div className="socialscard">
            <button className="m" onClick={() => {window.open("mailto:me@akulehtola.com")}}>Contact me&nbsp;<FontAwesomeIcon icon={faEnvelope} /></button>
            <button className="x" onClick={() => {window.open("https://github.com/akulehtola")}}><FontAwesomeIcon icon={faGithub} /></button>
            <button className="x" onClick={() => {window.open("https://linkedin.com/in/aku-lehtola")}}><FontAwesomeIcon icon={faLinkedin} /></button>
        </div>
        </>
    )
}