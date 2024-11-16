import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './index.css'

function handleContact():void {
    window.open("mailto:me@akulehtola.com")
}


export default function SocialsContainer() {
    return (
        <>
        <div className="socialscontainer">
            <button className="m" onClick={handleContact}>Contact me&nbsp;<FontAwesomeIcon icon={faEnvelope} /></button>
        </div>
        </>
    )
}