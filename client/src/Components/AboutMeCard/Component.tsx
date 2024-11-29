import ReactDOM from 'react-dom';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import './index.css'


const AboutMeText = () => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const errText: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> Error loading about me</>
    const {text, err} = useFetch("http://localhost:5173/src/api/about.json", errText);

    useEffect(() => {
        const div = ref.current;
        if (div) {
            setIsTruncated(div.scrollHeight > div.clientHeight)
        }
    }, [text])

    

    return (
        <>
            <div className="ref-div" ref={ref}>
                {text}
                {err && (err)}
            </div>
            {isTruncated && (
                <div className="read-more" onClick={() => setIsExpanded(true)}>Read more</div>
            )}
            {isExpanded && (
                ReactDOM.createPortal(<ExpandedAboutMe setIsExpanded={setIsExpanded} text={text} err={err}/>, document.body)
            )}
        </>
    )
}

type E = {
    setIsExpanded: Dispatch<SetStateAction<boolean>>,
    text: string | undefined,
    err: React.JSX.Element | undefined
}

function ExpandedAboutMe({text, err, setIsExpanded}: E) {
    return (
        <div className="expanded-card">
            <button onClick={() => setIsExpanded(false)}>Close</button>
            <div style={{width: "80%", marginLeft: "1rem"}}>
                {text}
                {err && (err)}
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