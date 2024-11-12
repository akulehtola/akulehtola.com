import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './index.css'

function handleSend():void {
    window.open("mailto:me@akulehtola.com");
}

export default function SocialsContainer() {
    return (
        <>
        <div className="socialscontainer">
            <div className="row">
                <div className="email">
                    <div className="address">me@akulehtola.com</div>
                    <div className="send" onClick={handleSend}><FontAwesomeIcon icon={faEnvelope} /></div>   
                </div>
                <div className="btncontainer">
                    <button className="btn github">
                        <FontAwesomeIcon icon={faGithub} />
                    </button>
                    <button className="btn linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}