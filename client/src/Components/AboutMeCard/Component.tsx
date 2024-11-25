import ReactDOM from 'react-dom';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'


const AboutMeText = () => {
    const [about, setAbout] = useState<string | React.JSX.Element>("");
    const [isTruncated, setIsTruncated] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    
    useEffect(() => {
        const errText: string = "Error loading the text";
        const err: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> {errText}</>
        fetch("http://localhost:5173/src/api/about.json")
        .then((response) => response.json())
        .then((data) => setAbout(data.about))
        .catch(() => setAbout(err))
    }, [ref])

    useEffect(() => {
        const div = ref.current;
        if (div) {
            setIsTruncated(div.scrollHeight > div.clientHeight)
        }

    }, [ref, about])

    return (
        <>
            <div className="ref-div" ref={ref}>{about}</div>
            {isTruncated && (
                <div className="read-more" onClick={() => setIsExpanded(true)}>Read more</div>
            )}
            {isExpanded && (
                ReactDOM.createPortal(<ExpandedAboutMe setIsExpanded={setIsExpanded}/>, document.body)
            )}
        </>
    )
}


function ExpandedAboutMe({setIsExpanded}:{setIsExpanded: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className="expanded-card">
            <button onClick={() => setIsExpanded(false)}>Close</button>
        </div>
    )
}


export default function AboutMeCard() {
    return (
        <div className="aboutmecard">
            <div className="t">
                <h2 className="h">About me</h2>
            </div>
            <div className="textbox">
                <h4 className="y"><AboutMeText /></h4>
            </div>
        </div>
    )
}