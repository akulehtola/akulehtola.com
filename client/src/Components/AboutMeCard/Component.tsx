import ReactDOM from 'react-dom';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import './index.css'

type E = {
    setIsExpanded: Dispatch<SetStateAction<boolean>>,
    text: string | undefined
}

const AboutMeText = () => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const {text} = useFetch("/api/about");
    const errText: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> Error loading about me</>
    
    useEffect(() => {
        const div = ref.current;
        if (div) {
            setIsTruncated(div.scrollHeight > div.clientHeight)
        }
    }, [text])

    return (
        <>
            <div className="ref-div" ref={ref}>
                {text ? text : errText}
            </div>
            {isTruncated && (
                <div className="read-more" onClick={() => setIsExpanded(true)}>Read more</div>
            )}
            {isExpanded && (
                ReactDOM.createPortal(<ExpandedAboutMe setIsExpanded={setIsExpanded} text={text}/>, document.body)
            )}
        </>
    )
}

function ExpandedAboutMe({text, setIsExpanded}: E) {
    return (
        <div className="expanded-card">
            <button className="close-btn" onClick={() => setIsExpanded(false)}><FontAwesomeIcon icon={faXmark} /></button>
            <div style={{width: "80%", marginLeft: "0.5rem"}}>
                {text}
            </div>
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