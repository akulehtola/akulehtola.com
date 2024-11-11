import {useState, useEffect} from 'react';
import './index.css'

export default function NameContainer() {
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
        <div className="namecontainer">
            <div className="texts">
                <h2>Aku Lehtola</h2>
                <h4>{age}</h4>
            </div>
        </div>
        </>
    )
}

