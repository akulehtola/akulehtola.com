import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './index.css'


export default function NameCard() {
    const [text, setText] = useState<string | React.JSX.Element>("");
    useEffect(() => {
        const errText: string = "Error loading the text";
        const err: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> {errText}</>
        fetch("http://localhost:5173/src/api/me.json")
        .then((response) => response.json())
        .then((data) => setText(data.me))
        .catch(() => setText(err))
    }, [])
    return (
        <>
        <div className="namecard">
            <div className="text">
                <h2 className="n">Aku Lehtola</h2>
                <h4 className="n">{text}</h4>
            </div>
        </div>
        </>
    )
}