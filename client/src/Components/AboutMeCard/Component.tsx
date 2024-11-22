import { useEffect, useState } from 'react';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'


export default function AboutMeCard() {
    const [about, setAbout] = useState<string | React.JSX.Element>("");
    useEffect(() => {
        const errText: string = "Error loading the text";
        const err: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> {errText}</>
        fetch("http://localhost:5173/src/api/about.json")
        .then((response) => response.json())
        .then((data) => setAbout(data.about))
        .catch(() => setAbout(err))
    })
    return (
        <div className="aboutmecard">
            <div className="t">
                <h2 className="h">About me</h2>
            </div>
            <div className="textbox">
                <h4 className="y">{about}</h4>
            </div>
        </div>
    )
}