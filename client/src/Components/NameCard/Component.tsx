import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './index.css'


export default function NameCard() {
    
    const [text, setText] = useState<string | React.JSX.Element>("");
    useEffect(() => {
        const errText: string = "Error loading the text";
        const err: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> {errText}</>
        fetch("http://localhost:5173/src/api/text.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("invalid response")
            }
        })
        .then((data) => {
            const a = data.text;
            setText(a)
        })
        .catch((error) => {
            console.error(error)
            setText(err)
        })
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

