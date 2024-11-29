import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import './index.css'


export default function NameCard() {

    const errText: React.JSX.Element = <><FontAwesomeIcon icon={faTriangleExclamation}/> Error loading info</>
    const {text, err} = useFetch("http://localhost:5173/src/api/me.json", errText)

    return (
        <>
        <div className="namecard">
            <div className="text">
                <h2 className="n">Aku Lehtola</h2>
                <h4 className="n">
                    {text}
                    {err && (err)}
                </h4>
            </div>
        </div>
        </>
    )
}