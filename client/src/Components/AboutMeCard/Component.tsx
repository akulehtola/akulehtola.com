import { useEffect, useState } from 'react';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'


export default function AboutMeCard() {
    const [aboutme, setAboutme] = useState<string | React.JSX.Element>("");
    useEffect(() => {
        const errText: string = "Error loading the about me text";
        const err: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> {errText}</>
        fetch("http://localhost:5173/src/api/aboutme.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("invalid response");
            }
        })
        .then((data) => {
            const b: string = data.aboutme;
            setAboutme(b)
        })
        .catch((error) => {
            console.error(error)
            setAboutme(err)
        })
    })
    return (
        <div className="aboutmecard">
            <div className="t">
                <h2 className="h">About me</h2>
            </div>
            <div className="textbox">
                <h4 className="y">{aboutme}</h4>
            </div>
        </div>
    )
}