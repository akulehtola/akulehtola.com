import {useState, useEffect} from 'react';
import './index.css'

export default function NameCard() {
    const [age, setAge] = useState()
    useEffect(() => {
        fetch("http://localhost:5173/src/api/age.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("invalid response")
            }
        })
        .then((data) => {
            const a = data.age;
            setAge(a)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])
    return (
        <>
        <div className="namecard">
            <div className="text">
                <h2 className="n">Aku Lehtola</h2>
                <h4 className="n">{age}</h4>
            </div>
        </div>
        </>
    )
}

